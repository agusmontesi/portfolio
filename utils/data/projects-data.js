import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Chatbot IA Development',
        description: "I developed a sophisticated chatbot using artificial intelligence technology. Leveraging the OpenAI API, I created a robust chatbot capable of understanding and responding to user queries in natural language. My role involved architecting the chatbot's backend infrastructure, integrating it with the OpenAI API, and implementing TypeScript for enhanced type safety and code quality.",
        tools: ['TypeScript', 'OpenAI API', 'Node.js', 'Express', 'React'],
        code: '',
        demo: '',
        image: '',
        role: 'Full Stack Developer',
      },
    {
        id: 2,
        name: 'AI Powered Financial App',
        description: "Me and my team built an AI-powered financial mobile application. I have developed API using Express, Typescript, OpenAI, AWS, and MongoDB. Used OTP via AWS SES, Google, and Facebook for the authentication system. Built AI assistants using OpenAI's latest model and trained using our dataset. Voice messages are converted to text using AWS Transcribe. The app fetches data from Google Sheets and generates a PDF term sheet, sent via AWS SES.",
        tools: ['Express', 'MongoDB', 'OpenAI API', 'AWS SES', 'AWS S3', 'Node Mailer', 'Joi', 'Puppeteer', 'EC2', 'PM2', 'Nginx'],
        role: 'Backend Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 3,
        name: 'Travel Agency App',
        description: 'I have designed and developed a full-stack web app for surexpeditions, a travel agency in Argentina. I created the UI using NextJS, Typescript, MUI, TailwindCSS, Google Maps, Sun-Editor, and React Slick. The app supports multiple languages and currencies. I developed the API using NestJS, Typescript, MySQL, TypeORM, AWS, and Nodemailer. I deployed the front-end app to AWS Amplify and the back-end app to AWS EC2.',
        tools: ['NextJS', 'Tailwind CSS', "Google Maps", "NestJS", "TypeScript", "MySQL", "AWS S3", "Sun-Editor", "Gmail Passkey"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 4,
        name: 'Crypto Market Prices',
        description: 'I developed a web page to display the official quotation of all cryptocurrencies in the market. The application retrieves real-time data from multiple cryptocurrency APIs and displays it in a user-friendly interface. I used React for the frontend, integrating Bootstrap and SCSS for styling. On the backend, I implemented an Express server with TypeScript, MongoDB for data storage, and Azure Blob for image storage. The application supports JWT-based role-based authentication for secure access to certain features.',
        tools: ['React', 'Bootstrap', 'SCSS', 'Express', 'TypeScript', 'MongoDB', 'Azure Blob', 'JWT'],
        code: '',
        demo: '',
        image: '', // Reemplaza 'crypto-market-image.jpg' con la ruta de la imagen del proyecto
        role: 'Full Stack Developer',
      }
      
      
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },