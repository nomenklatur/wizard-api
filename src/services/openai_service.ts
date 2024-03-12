export function generatePrompt (businessName: string): string {
  return `Help me make copywriting and image generation prompt to build landing page for a business in printing business, with brand name ${businessName}.
    I need your help to make:
    1. the copywriting of the landing page
    2. the image generation prompt for each component in the page.
    
    Please write down the copywriting and the prompt in the following format:
    Hero banner image prompt:
    Heading:
    Subheading:
    Unique Selling Point 1 text:
    Unique Selling Point 1 image prompt:
    Unique Selling Point 2 text:
    Unique Selling Point 2 image prompt:
    Unique Selling Point 3 text:
    Unique Selling Point 3 image prompt:
    Clients name
    Testimonial 1 Client's name
    Testimonial 1 Client's company
    Testimonial 1 text
    Testimonial 1 client's picture prompt
    
    make sure:
    1. use Bahasa Indonesia for the copywriting
    2. follow the format exactly, as Im going to feed it into the system`;
}
