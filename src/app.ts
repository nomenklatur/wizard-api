import dotenv from 'dotenv';
import express, { type Application, type NextFunction, type Request, type Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { openai } from './config/openai';
import { generatePrompt } from './services/openai_service';

dotenv.config();

// initialize express server
const app: Application = express();
const port: number = parseInt(process.env.PORT as string, 10);

// parse body request
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// cors access handler
app.use(cors());
app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  next();
});

app.use('/hello', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ data: 'Hello World!' });
});

app.get('/wizard', async (req: Request, res: Response) => {
  const chat = await openai.chat.completions.create({
    messages: [{ role: 'system', content: generatePrompt('Batokok') }],
    model: 'gpt-3.5-turbo'
  });

  res.status(200).send({ data: chat.choices[0] });
});

app.listen(port, () => { console.log(`Wizard API is running on port ${port}`); });
