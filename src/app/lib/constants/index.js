const importImage = path => {
  return require(`../assets/${path}`).default;
};
// icons
export const web = importImage('icons/web.webp');
export const logo = importImage('icons/logo.png');
export const mobile = importImage('icons/mobile.png');
export const link = importImage('icons/link.png');
export const android = importImage('icons/android.png');
export const ios = importImage('icons/ios.png');
export const menu = importImage('icons/menu.svg');
export const close = importImage('icons/close.svg');
// tech
export const css = importImage('tech/css.png');
export const figma = importImage('tech/figma.png');
export const git = importImage('tech/git.png');
export const html = importImage('tech/html.png');
export const javascript = importImage('tech/javascript.png');
export const mongodb = importImage('tech/mongodb.png');
export const nodejs = importImage('tech/nodejs.png');
export const reactjs = importImage('tech/reactjs.png');
export const redux = importImage('tech/redux.png');
export const bootstrap = importImage('tech/bootstrap.png');
export const angular = importImage('tech/angular.webp');
export const tailwind = importImage('tech/tailwind.png');
export const typescript = importImage('tech/typescript.png');
// company
export const ejada = importImage('company/ejada.png');
export const mostaql = importImage('company/mostaql.png');
export const websquids = importImage('company/websquids.png');
export const unifi = importImage('company/unifi.webp');
// projects
export const arc = importImage('projects/arc.webp');
export const eagle = importImage('projects/eagle.png');
export const nft1 = importImage('projects/nft/1.png');
export const gotcha = importImage('projects/gotcha/1.png');
export const store = importImage('projects/store/1.png');
export const nike = importImage('projects/nike.png');
export const netflix = importImage('projects/netflix/6.png');
export const dentist = importImage('projects/dentist/5.png');
export const sprout = importImage('projects/sprout/1.png');
export const airbnb = importImage('projects/airbnb.png');
export const deer = importImage('projects/deer.png');
export const shareable = importImage('projects/shareable.png');
export const easy = importImage('projects/easy.png');
export const agency = importImage('projects/agency.png');
export const alef = importImage('projects/alef.png');
export const alef2 = importImage('projects/alef2.png');
export const metaversus = importImage('projects/metaversus.png');

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];
const categories = [
  'All',
  'Landing Page',
  'Angular',
  'Full Stack',
  'Mobile App',
  'React',
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Native Developer',
    icon: mobile,
  },
];
const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'React Native',
    icon: reactjs,
  },
  {
    name: 'Angular',
    icon: angular,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Bootstrap',
    icon: bootstrap,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
];

const experiences = [
  {
    title: 'React Native Developer',
    company_name: 'Ejada',
    icon: ejada,
    iconBg: '#E6DEDD',
    date: 'July 2022 - Present',
    points: [
      'Designed and implemented the KYC and Account Opening process.',
      'Developed and integrated the New User Registration module.',
      'Implemented Different Themes for the Application like Ramadan Theme, Foundation Day, and National Day.',
      'Enhanced the Murabha Account Opening flow.',
      'Enabled Document Upload/Download functionality.',
      'Revamped the Create & Update KYC process.',
      'Spearheaded the implementation of key features such as "What’s New," "HIVE Survey," "Crowd Funding product," and "Family Onboarding,".',
      'Mentored and led a squad of 3 developers, providing code reviews, technical guidance, and support to ensure high-quality deliverables and foster team growth.',
    ],
  },
  {
    title: 'Senior Frontend Developer',
    company_name: 'Unifi Solutions',
    icon: unifi,
    iconBg: '#E6DEDD',
    date: 'Apr 2023 - July 2023',
    points: [
      'Developed and maintained the Alef IoT Portal (cloud.alefiot.io), a comprehensive platform for managing IoT products, ensuring seamless functionality and user experience.',
      'Integrated the Ignite Meter App with its full suite of features, enhancing the platform’s capabilities for IoT device management.',
      'Implemented a Playback Map for geo-navigation and area marking on layouts, enabling users to visualize and analyze IoT device data effectively.',
      'Resolved Jira-raised issues, improving system stability and user satisfaction.',
      'Contributed to the Alef IoT Marketplace (store.alefiot.io), an e-commerce platform for selling IoT products, by fixing UI issues and enhancing the overall user experience.',
      'Added a universal cookie mechanism to synchronize login sessions between the IoT Portal and Marketplace, streamlining user access across platforms.',
    ],
  },
  {
    title: 'Frontend Developer',
    company_name: 'WebSquids LLC',
    icon: websquids,
    iconBg: '#E6DEDD',
    date: 'Sep 2020 - June 2022',
    points: [
      'Developing and maintaining web applications using React.js / Next.js / Angular and other related technologies.',
      'Integrating with Services and APIs',
      'Implementing responsive design and ensuring cross-browser compatibility.',
    ],
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Mostaql',
    icon: mostaql,
    iconBg: '#E6DEDD',
    date: 'Mar 2020 - Aug 2020',
    points: [
      'Developing and maintaining web applications using React.js / Node.js / MongoDB and other related technologies.',
    ],
  },
];

const projects = [
  {
    name: 'Alrajhi Capital',
    description:
      'Mobile Application for all your investment needs. It brings together multiple services and products in one convenient and user-friendly app',
    tags: [
      {
        name: 'react-native',
        color: 'blue-text-gradient',
      },
    ],
    categories: ['Mobile App'],
    image: arc,
    android_link: 'https://apps.apple.com/us/app/alrajhi-capital/id6443600368',
    ios_link:
      'https://play.google.com/store/apps/details?id=com.alrajhicapital&hl=en_US',
  },
  {
    name: 'Alef IOT Portal',
    image: alef,
    categories: ['React'],

    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
    ],
    description:
      'Alef IoT Portal is a comprehensive platform for managing IoT products',
    link: 'https://cloud.alefiot.io',
  },
  {
    name: 'Alef IOT MarketPlace',
    image: alef2,
    categories: ['React'],

    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
    ],
    link: 'https://store.alefiot.io/en/',

    description:
      'Alef IoT MarketPlace is a comprehensive platform for Purchasing IoT products',
  },
  {
    name: 'The Dentist',
    image: dentist,
    categories: ['React'],

    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
    ],

    description:
      "This Application is just for preview purposes, You Can view all the doctors ,search with specific place ,sign up ,login,and dashboard to each doctor that can control his bookings, it also comes with dynamic content meaning that the admin can Customize the pages as he likes , and more ,it will be Supporting Arabic Language, It's also very responsive Design",
  },
  {
    name: 'Eagle Interior Design',
    description: 'A landing page for Eagle Interior Design',
    categories: ['Full Stack', 'React'],

    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },

      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: eagle,
    link: 'https://eagle-rio.vercel.app/',
  },
  {
    name: 'Deer Fitness',
    description:
      "This Application is Made for a Gym so that it's participants can make reservations easily  , It Supports Arabic Languages,  It's also very responsive Design",
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'violet-text-gradient',
      },
      {
        name: 'express',
        color: 'orange-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
    ],
    categories: ['Full Stack', 'React'],

    image: deer,
    link: 'https://deer-fitness.vercel.app/',
  },

  {
    name: 'Electronics Store',
    description:
      "In This Application You Can view all the products , add to cart , checkout , and more ,it Supports Arabic Language, It's also very responsive Design",
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'violet-text-gradient',
      },
      {
        name: 'express',
        color: 'orange-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
    ],
    categories: ['Full Stack', 'React'],

    image: store,
    link: 'https://electronicz-store.vercel.app/',
  },
  {
    name: 'Gotcha Store',
    description:
      "In This Application You Can view all the products , add to cart , checkout ,it has admin panel to control every thing like creating products editing them ,  and more , It's also very responsive Design",
    tags: [
      {
        name: 'angular',
        color: 'orange-text-gradient',
      },
    ],
    categories: ['Full Stack', 'Angular'],

    image: gotcha,
    link: 'https://gotcha-store.vercel.app/',
  },
  {
    name: 'Netflix Clone',
    description:
      "This Application Fetches the Popular Movies and Tv Shows From TMDB ,It's The Same Design Style As The Real Netflix , Manually Customized Components like Accordion & Floating Input Without any external Library , It Supports Two Languages (English & Arabic), It's Also Very responsive Design",
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
    ],
    categories: ['React'],

    image: netflix,
    link: 'https://netflex-nine.vercel.app/',
  },

  {
    name: 'Sprout Social',
    image: sprout,
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'violet-text-gradient',
      },
      {
        name: 'express',
        color: 'orange-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
    ],
    categories: ['React', 'Full Stack'],
    link: 'https://sprout-social.vercel.app/',
    description:
      "In This Application You Can Sign up or login to your account , You can create a post , like it , comment on it ,search for people,view & Edit Your Profile , and more , It's also very responsive Design",
  },
  {
    name: 'NFT MARKET SHOWCASE',
    description: 'Landing Page is Just a ShowCase for a Mobile App NFT Market',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'violet-text-gradient',
      },
      {
        name: 'express',
        color: 'orange-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
    ],
    image: nft1,
    categories: ['React', 'Landing Page'],

    link: 'https://nftshowcase-market.vercel.app/',
  },
  {
    name: 'Airbnb Clone',
    description: 'Mobile Application Airbnb Clone',
    tags: [
      {
        name: 'react-native',
        color: 'blue-text-gradient',
      },
    ],
    categories: ['Mobile App'],
    image: airbnb,
  },

  {
    name: 'Metaversus',
    description: 'Landing Page',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwindcss',
        color: 'blue-text-gradient',
      },
    ],
    categories: ['Landing Page', 'React'],

    image: metaversus,
    link: 'https://metaversus-wine.vercel.app/',
  },
  {
    name: 'Nike',
    image: nike,
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwindcss',
        color: 'blue-text-gradient',
      },
    ],
    categories: ['Landing Page', 'React'],

    link: 'https://nike-sooty.vercel.app/',
    description: 'Landing Page Nike Clone',
  },
  {
    name: 'Agency',
    image: agency,
    link: 'https://agency-beta.vercel.app/',
    tags: [
      {
        name: 'html',
        color: 'orange-text-gradient',
      },
      {
        name: 'css',
        color: 'blue-text-gradient',
      },
    ],
    categories: ['Landing Page', 'React'],

    description: 'Landing Page',
  },
  {
    name: 'EasyBank',
    image: easy,
    link: 'https://ahmedalianz.github.io/easybank-landing-page/',
    tags: [
      {
        name: 'html',
        color: 'orange-text-gradient',
      },
      {
        name: 'css',
        color: 'blue-text-gradient',
      },
    ],
    categories: ['Landing Page', 'React'],

    description: 'Landing Page',
  },
  {
    name: 'Shareable To Do App',
    image: shareable,
    link: 'https://sharable-to-do.vercel.app/',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
    ],
    categories: ['React'],

    description:
      "In This Application You Can you can create any user by just name so lists are just for your username, Every username has his own lists & able to : Create a New list,Add List Items,Navigate Between Lists,Share Any List By Several Means eg:facebook,whatsapp,direct link,  It's also very responsive Design",
  },
];

export {services, categories, technologies, experiences, projects};
