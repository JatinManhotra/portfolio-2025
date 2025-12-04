import weather from "../../assets/projects/Weather Dashboard.png";
import weatherVid from "../../assets/projects/Weather.mp4";
import century from "../../assets/projects/Century.png";
import centuryVid from "../../assets/projects/Century.mp4";
import musify from "../../assets/projects/Musify.png";
import musifyVid from "../../assets/projects/Musify.mp4";
import ticTac from "../../assets/projects/Tic Tac Toe.png";
import ticTacVid from "../../assets/projects/Tic Tac.mp4";
import portfolioVid from "../../assets/projects/portfolio.mp4";
import portfolio from "../../assets/projects/portfolio.png";
import utaVid from "../../assets/projects/uta.mp4";
import uta from "../../assets/projects/uta.png";
import react from "../../assets/icons/react.svg";
import react_icons from "../../assets/icons/react-icons.svg";
import react_router from "../../assets/icons/react-router.svg";
import redux from "../../assets/icons/redux.svg";
import css from "../../assets/icons/css.svg";
import chakra_ui from "../../assets/icons/chakra-ui.svg";
import moment from "../../assets/icons/moment.svg";
import firebase from "../../assets/icons/firebase.svg";
import leaflet from "../../assets/icons/leaflet.svg";
import tailwind_css from "../../assets/icons/tailwind-css.svg";
import apexcharts from "../../assets/icons/apexcharts.png";
import expenseImg from "../../assets/projects/expense.png";
import expenseVid from "../../assets/projects/Expense.mp4";
import cryptoImg from "../../assets/projects/crypto.png";
import cryptoVid from "../../assets/projects/Crypto.mp4";

export const projectData = [ 
  // portfolio
  {
    title: "My Portfolio",
    description:
      "A fully responsive and interactive portfolio website built using React and Tailwind CSS that showcases my skills, projects, and personality as a front-end web developer. It includes real-time form validation, animated components, smooth page transitions, theme toggling, and integration with external APIs for real-world functionalities.",
    short_description:
      "A fully responsive and interactive portfolio website built using React and Tailwind CSS that showcases my skills, projects, and personality as a front-end web developer.",
    github_page: "https://github.com/JatinManhotra/portfolio-2025",
    key_features: [
      {
        ul: "📱 Responsive Design",
        li: "Tailored layouts for mobile, tablet, and desktop with media-query-based component behavior.",
      },
      {
        ul: "🌙 Dark Mode Toggle",
        li: "Persistent dark/light theme using 'useLocalStorage()' and Tailwind's dark mode support.",
      },
      {
        ul: "📏 Custom Scrollbar",
        li: "A top scroll indicator using state logic that updates smoothly as the user scrolls through the page.",
      },
      {
        ul: "✨ Animated Components",
        li: "Integrated AOS (Animate on Scroll) for entry animations.",
      },
      {
        ul: "🧩 Project Showcase with Scroll Navigation",
        li: "Projects are grouped in cards, with a final 'View All' card links to GitHub. Pagination indicators update dynamically with user scroll.",
      },
      {
        ul: "🔗 Project Detail Routing",
        li: "Each project opens on a dedicated route using React Router DOM.",
      },
      {
        ul: "📬 Contact Form with Validation:",
        li: "'@EmailJS' integration for sending emails directly from the browser. Name, email, and message inputs with real-time validation.",
      },
      {
        ul: "⏰ Custom Clock Widget",
        li: "Shows live time with 24-hour/12-hour format, and current day/date.",
      },
    ],
    technology_used: [
      {
        icon: react,
        name: "React js",
        color: "#61DAFB",
      },
      {
        icon: react_router,
        name: "React Router DOM",
        color: "#d0021b",
      },
      {
        icon: react_icons,
        name: "React Icons",
        color: "#e91e63",
      },
      {
        icon: tailwind_css,
        name: "Tailwind CSS",
        color: "#06B6D4",
      },
    ],
    api_used: [
      {
        name: "EmailJS",
        link: "https://www.emailjs.com/",
        text: "Sends contact form information directly to your email.",
      },
      {
        name: "Gemini API",
        link: "https://ai.google.dev/gemini-api/docs",
        text: "Used to generate AI responses based on user prompts. Model: gemini-2.0-flash",
      },
    ],
    video: portfolioVid,
    img: portfolio,
    future_ideas: [
      "🗂️ Add project filtering by category or tech stack.",
      "🎖️ Add Achievements, Certificates, and Client projects sections.",
      "📽️ Use Framer Motion for smoother, React-native animations.",
      "👤 Improve accessibility.",
    ],
  },

  // weather dashboard
  {
    title: "Weather31 - Weather Dashboard",
    description:
      "A responsive React-based weather dashboard that lets users search any city and view real-time weather, 3-day and hourly forecasts, and interact with a Leaflet map displaying saved locations. Features include dark mode, persistent storage via localStorage, and smooth client-side routing using React Router.",
    short_description:
      "A responsive React-based weather dashboard that lets users search any city and view real-time weather and interact with a map.",
    live_demo: "https://jatinmanhotra.github.io/react-weather-app/#/dashboard",
    github_page: "https://github.com/JatinManhotra/react-weather-app",
    key_features: [
      {
        ul: "🔍 City Search",
        li: "Search any city worldwide and fetch real-time weather data.",
      },
      {
        ul: "🌇 Forecast & Highlights",
        li: "Shows highs and lows, humidity, pressure, UV index, wind speed and hourly forecast for the day. 3-days forecast with icons and detailed data.",
      },
      {
        ul: "🌎 Interactive Map",
        li: "Uses Leaflet.js to display a dynamic map. Clicking on a city fetches the weather.",
      },
      {
        ul: "🏙️ Saved Cities Panel",
        li: "Displays weather previews for saved cities. Clicking a city updates the main dashboard",
      },
      {
        ul: "🔄 Navigation",
        li: "Integrated with React Router for client-side routing.",
      },
      {
        ul: "🌗 Dark Mode Support",
        li: "Toggle between light and dark themes. Stored in local storage",
      },
      {
        ul: "📦 Local Storage",
        li: "Persists saved cities and dark theme preference using local storage. Auto reload previous state on page reload",
      },
      {
        ul: "🧭 Auto Timezone Support",
        li: "UI dynamically adjusts background theme based on current weather conditions and time.",
      },
      {
        ul: "📱 Responsive UI",
        li: "Clean and modern UI with responsive layouts for mobile, tablet, and desktop.",
      },
    ],
    technology_used: [
      {
        icon: react,
        name: "React js",
        color: "#61DAFB",
      },
      {
        icon: react_router,
        name: "React Router DOM",
        color: "#d0021b",
      },
      {
        icon: react_icons,
        name: "React Icons",
        color: "#e91e63",
      },
      {
        icon: moment,
        name: "Moment js",
        color: "#529990",
      },
      {
        icon: leaflet,
        name: "Leaflet js",
        color: "#61ba9e",
      },
      {
        icon: tailwind_css,
        name: "Tailwind CSS",
        color: "#06B6D4",
      },
    ],
    api_used: [
      {
        name: "WeatherAPI",
        link: "https://www.weatherapi.com/",
        text: "Real-time weather conditions, hourly and weekly forecast.",
      },
    ],
    video: weatherVid,
    img: weather,
    future_ideas: [
      "📌 Add user geolocation detection on load",
      "⚠️ Show real-time weather alerts or warnings",
    ],
  },

  // musify app
  {
    title: "Musify - Music Streaming App",
    description:
      "A dynamic and responsive music streaming web application built with React, inspired by platforms like Spotify and Apple Music. It allows users to explore trending music, search for songs, view artists and albums, and interact with an intuitive music player with full controls.",
    short_description:
      "A dynamic and responsive music streaming web application built with React, inspired by platforms like Spotify and Apple Music.",
    live_demo: "https://jatinmanhotra.github.io/react-musify/",
    github_page: "https://github.com/JatinManhotra/react-musify",
    key_features: [
      {
        ul: "📊 Music Discovery",
        li: "Sections for Top Charts, Albums, Artists and Playlists. Dedicated Song, Album, and Artist detail pages.",
      },
      {
        ul: "🔍 Search Functionality",
        li: "Search results page shows fetched songs with artist info.",
      },
      {
        ul: "🎹 Interactive Music Player",
        li: "Full player with controls like Play/Pause, Next, Previous etc with on-click status message",
      },
      {
        ul: "💻 UI/UX Enhancements",
        li: "Skeleton loaders while the data is being fetched. Fully responsive layout for every screen size.",
      },
      {
        ul: "🧠 State Management & Performance",
        li: "Redux Toolkit with RTK Query for API and state. Context API for cross-component communication.",
      },
      {
        ul: "🧭 Routing & Navigation",
        li: "react-router-dom for seamless page navigation.",
      },
      {
        ul: "🛡️ Deployment & CORS Handling",
        li: "Uses RapidAPI's deezerDevs endpoint with custom headers.",
      },
    ],
    technology_used: [
      {
        icon: react,
        name: "React js",
        color: "#61DAFB",
      },
      {
        icon: react_router,
        name: "React Router DOM",
        color: "#d0021b",
      },
      {
        icon: redux,
        name: "Redux Toolkit + RTK Query",
        color: "#764ABC",
      },
      {
        icon: react,
        name: "Context API",
        color: "#61DAFB",
      },
      {
        icon: react_icons,
        name: "React Icons",
        color: "#e91e63",
      },
      {
        icon: tailwind_css,
        name: "Tailwind CSS",
        color: "#06B6D4",
      },
    ],
    api_used: [
      {
        name: "Deezer API via RapidAPI",
        link: "https://rapidapi.com/deezerdevs/api/deezer-1",
        text: "Tracks, Artists, Albums, Charts, Playlists, Search.",
      },
    ],
    video: musifyVid,
    img: musify,
    future_ideas: [
      "🔑 User authentication (Firebase/Auth0)",
      "🎶 Save favorite songs and playlists to database",
      "🌓 Dark/Light mode toggle",
      "🎤 Lyrics integration with synced playback",
      "🔉 Audio visualizations",
    ],
  },

  // tic tac toe
  // {
  //   title: "Tic Tac Toe",
  //   description:
  //     "A fully interactive and responsive Tic Tac Toe web app built using React. This project showcases both classic Player vs Player (PvP) mode and a smart Player vs Computer (PvC) mode with basic AI logic. It focuses on intuitive design, human-readable code, and clean gameplay logic - ideal for casual players.",
  //   short_description:
  //     "A fully interactive and responsive Tic Tac Toe web app built using React. This project showcases both PvP mode and a PvC mode with basic AI logic.",
  //   live_demo: "https://jatinmanhotra.github.io/react-tic-tac-toe/",
  //   github_page: "https://github.com/JatinManhotra/react-tic-tac-toe",
  //   key_features: [
  //     {
  //       ul: "🎮 Two Game Modes",
  //       li: "Player vs Player (PvP) and Player vs Computer (PvC).",
  //     },
  //     {
  //       ul: "✅ Win Detection Logic",
  //       li: "Highlights the winning combination visually.",
  //     },
  //     {
  //       ul: "🏁 Game Status Updates",
  //       li: "Real-time feedback on the current turn. Tracks and displays player scores across rounds. ",
  //     },
  //     {
  //       ul: "🧠 Smart Computer AI",
  //       li: "AI attempts to win if possible. If not, it blocks the player from winning.",
  //     },
  //     {
  //       ul: "🔁 Game Reset Button",
  //       li: "Resets the board while keeping scores intact.",
  //     },
  //     {
  //       ul: "📱 Fully Responsive Design",
  //       li: "Optimized layout and controls for mobile, tablet, and desktop. Uses media queries for smooth UI scaling.",
  //     },
  //     {
  //       ul: "🎨 Custom Styling",
  //       li: "Each player's symbol (X/O) has distinct colors. Winning squares get a highlight color.",
  //     },
  //   ],
  //   technology_used: [
  //     {
  //       icon: react,
  //       name: "React js",
  //       color: "#61DAFB",
  //     },
  //     {
  //       icon: css,
  //       name: "CSS3",
  //       color: "#1572B6",
  //     },
  //   ],
  //   video: ticTacVid,
  //   img: ticTac,
  //   future_ideas: [
  //     "❗Difficulty Levels: Add easy, medium, and hard AI difficulty.",
  //     "🔉 Sound Effects: Add click and win sounds.",
  //     "📦 Local Storage: Save scores and game mode across sessions.",
  //     "🛜 Multiplayer Online Mode (with WebSockets or Firebase)",
  //   ],
  // },

  // century AI
  {
    title: "Century AI - AI Chat App",
    description:
      "A responsive AI chat app built with React, Firebase, and the Gemini API, enabling users to interact with an AI assistant in real-time. Features include chat history with rename/delete options, authentication via Firebase, dark mode with per-user preferences, and persistent storage of conversations. The app supports deep linking to specific chats, real-time UI updates, and client-side routing with React Router.",
    short_description:
      "A responsive AI chat app built with React, Firebase, and the Gemini API, enabling users to interact with an AI assistant in real-time.",
    live_demo: "https://jatinmanhotra.github.io/react-century/",
    github_page: "https://github.com/JatinManhotra/react-century",
    key_features: [
      {
        ul: "🔐 Authentication",
        li: "Firebase Authentication with Email & Password ( Login and Signup ).",
      },
      {
        ul: "💬 AI Chat Experience",
        li: "Users can send prompts and receive responses from Google Gemini API (gemini-2.0-flash). AI responses are streamed with loading indicators.",
      },
      {
        ul: "📁 Conversations",
        li: "Each conversation is stored as an object with : id, title, messages array and a timestamp. Sidebar displays recent chats.",
      },
      {
        ul: "🛠 Conversation Tools",
        li: "Rename conversation, Delete conversation, Create new conversation.",
      },
      {
        ul: "🌗 Dark Mode",
        li: "Dark mode state saved per user in Firestore. Auto applies on page reload.",
      },
      {
        ul: "📱 Responsive Design",
        li: "Uses TailwindCSS for consistent styling. Responsive layouts for every screen size.",
      },
      {
        ul: "🔗 Share Feature",
        li: "Share your conversation via link.",
      },
    ],
    technology_used: [
      {
        icon: react,
        name: "React js",
        color: "#61DAFB",
      },
      {
        icon: react_router,
        name: "React Router DOM",
        color: "#d0021b",
      },
      {
        icon: react,
        name: "Context API",
        color: "#61DAFB",
      },
      {
        icon: react_icons,
        name: "React Icons",
        color: "#e91e63",
      },
      {
        icon: firebase,
        name: "Firebase",
        color: "#FFCA28",
      },
      {
        icon: tailwind_css,
        name: "Tailwind CSS",
        color: "#06B6D4",
      },
    ],
    api_used: [
      {
        name: "Gemini API",
        link: "https://ai.google.dev/gemini-api/docs",
        text: "Used to generate AI responses based on user prompts. Model: gemini-2.0-flash",
      },
      {
        name: "Firebase",
        link: "https://firebase.google.com/",
        text: "Auth and Firestore used for user management and persistent data storage.",
      },
    ],
    video: centuryVid,
    img: century,
    future_ideas: [
      "📁 Export/Download conversation as text or PDF",
      "🎙️ Voice input/output",
      "📤 Upload files and send them to AI",
      "🖼️ Image generation from a prompt",
      "☝🏼 Model selection (e.g., Gemini Pro, Claude, etc.)",
    ],
  },

  // // uta AI
  // {
  //   title: "Uta - Chatbot",
  //   description:
  //     "A responsive AI chatbot built with React and the Gemini API, designed to provide real-time interactions in a clean interface. Uta supports dynamic conversations using state management, features a toggle able chat icon with animated transitions, and includes dark mode compatibility. Built with modular React components and state logic for toggling, animation, and rendering AI responses in real-time.",
  //   short_description:
  //     "A responsive AI chatbot built with React and the Gemini API, designed to provide real-time interactions in a clean interface.",
  //   key_features: [
  //     {
  //       ul: "🎤 Real-time AI Responses",
  //       li: "Uta responds to user prompts instantly, mimicking natural conversation flow. Remembers the last conversation and responds accordingly to it.",
  //     },
  //     {
  //       ul: "⚛️ React-Powered Interface",
  //       li: "Clean component structure using React and state management for toggling the chat window, animations, and conditional rendering.",
  //     },
  //     {
  //       ul: "🎭 Toggleable Animated Icon",
  //       li: "A minimal chatbot icon (Uta) that transforms into a close (❌) button with subtle rotation animations on click.",
  //     },
  //     {
  //       ul: "🌙 Dark Mode Support",
  //       li: "Seamlessly adapts to dark/light themes for a consistent user experience across devices.",
  //     },
  //     {
  //       ul: "📱 Responsive Design",
  //       li: "Mobile-first and desktop-friendly layout ensures Uta works smoothly across screen sizes.",
  //     },
  //     {
  //       ul: "🧠 Stateless Mode ",
  //       li: "Optionally designed to not save chat history, refreshing the page resets the conversation.",
  //     },
  //   ],
  //   technology_used: [
  //     {
  //       icon: react,
  //       name: "React js",
  //       color: "#61DAFB",
  //     },
  //     {
  //       icon: react_icons,
  //       name: "React Icons",
  //       color: "#e91e63",
  //     },
  //     {
  //       icon: tailwind_css,
  //       name: "Tailwind CSS",
  //       color: "#06B6D4",
  //     },
  //   ],
  //   api_used: [
  //     {
  //       name: "Gemini API",
  //       link: "https://ai.google.dev/gemini-api/docs",
  //       text: "Used to generate AI responses based on user prompts. Model: gemini-2.0-flash",
  //     },
  //   ],
  //   video: utaVid,
  //   img: uta,
  //   future_ideas: [
  //     "🎨 Customizable Avatar & Themes",
  //     "🎙️ Voice input/output",
  //     "📤 Export Chat Option",
  //   ],
  // },
];

export const proBonoData = [
  // expense tracker
  {
    title: "Expense Tracker",
    description:
      "A responsive and intuitive expense tracking application built with React, Chakra UI, and React ApexCharts. Designed to help users log, categorize, and visualize their spending habits, it features an interactive chart for analyzing expenses in real time. The app is structured with modular components and optimized for mobile and desktop devices, demonstrating strong UI design and state management skills.",
    short_description:
      "A responsive expense tracking application built with React, Chakra UI, and React ApexCharts. Designed to help users log, categorize, and visualize their expenses in an intuitive interface.",
    live_demo: "https://jatinmanhotra.github.io/expense-tracker/",
    github_page: "https://github.com/JatinManhotra/expense-tracker",
    key_features: [
      {
        ul: "📊 Interactive Expense Visualization",
        li: "Real-time charts powered by React ApexCharts to display spending trends by category or date.",
      },
      {
        ul: "⚛️ React-Powered Interface",
        li: "Modular React components for expense list, input forms, and chart rendering with smooth state updates.",
      },
      {
        ul: "🎨 Chakra UI Styling",
        li: "Fully responsive, accessible, and themable design using Chakra UI's component library and color modes.",
      },
      {
        ul: "➕ Add & Manage Expenses",
        li: "Users can quickly add new expenses, categorize them, and remove entries with instant updates.",
      },
      {
        ul: "📱 Mobile-First Responsive Design",
        li: "Optimized for both desktop and mobile views to ensure usability on all devices.",
      },
    ],
    technology_used: [
      {
        icon: react,
        name: "React js",
        color: "#61DAFB",
      },
      {
        icon: chakra_ui,
        name: "Chakra UI",
        color: "#319795",
      },
      {
        icon: apexcharts,
        name: "React ApexCharts",
        color: "#3096f3",
      },
    ],
    video: expenseVid,
    img: expenseImg,
    future_ideas: [
      "💾 Local storage or cloud sync for persistent expense history",
      "📂 Export expenses to CSV or PDF",
      "🔍 Advanced filtering and search by date range or category",
    ],
  },

  // crypto dashboard UI
  {
    title: "Crypto Dashboard UI",
    description:
      "A modern cryptocurrency dashboard interface showcasing a professional, component-based design built with React and Chakra UI. It features sections for market trends, coin details, and portfolio stats, arranged in a clean, responsive grid layout. While currently UI-only without live data, it serves as a solid foundation for integrating real-time APIs and interactive charts in future versions.",
    short_description:
      "A sleek and modern cryptocurrency dashboard interface built with React and Chakra UI. Designed for tracking market trends, portfolio distribution, and price changes.",
    live_demo: "https://jatinmanhotra.github.io/crypto-dashboard/",
    github_page: "https://github.com/JatinManhotra/crypto-dashboard",
    key_features: [
      {
        ul: "📊 Dashboard Layout",
        li: "Organized sections for market overview, coin details, and portfolio stats in a grid-based design.",
      },
      {
        ul: "🎨 Chakra UI Styling",
        li: "Clean, accessible, and responsive design powered by Chakra UI's theming and prebuilt components.",
      },
      {
        ul: "📱 Mobile-First Responsive Design",
        li: "Optimized for mobile, tablet, and desktop with consistent styling.",
      },
      {
        ul: "💡 Easily Extensible",
        li: "Designed as a scalable template for integrating APIs or adding interactive features.",
      },
      {
        ul: "🌙 Dark/Light Mode Support",
        li: "UI adapts seamlessly to both dark and light themes for user preference.",
      },
    ],
    technology_used: [
      {
        icon: react,
        name: "React js",
        color: "#61DAFB",
      },
      {
        icon: chakra_ui,
        name: "Chakra UI",
        color: "#319795",
      },
    ],
    api_used: [],
    video: cryptoVid,
    img: cryptoImg,
    future_ideas: [
      "🔗 Live cryptocurrency price API integration",
      "📈 Interactive charts for price and market trends",
      "📤 Exportable portfolio reports",
    ],
  },
  // AI Chatbot
  {
  title: "AI Chatbot",
  description:
    "An interactive AI chatbot originally developed for a local business and later adapted into my personal portfolio. Built with React and integrated with Gemini API, the chatbot offers real-time responses in a clean, responsive interface. Designed with modular components, toggleable UI, and dark mode support, it demonstrates my ability to create functional and engaging conversational UIs from scratch and integrate them seamlessly into existing web projects.",
  short_description:
    "An interactive AI chatbot originally developed for a local business and later adapted into my personal portfolio. Built with React and integrated with Gemini API.",
    github_page: "https://github.com/JatinManhotra/portfolio-2025/tree/main/src/pages/projects/chatbot",
  key_features: [
    {
      ul: "💬 Real-time AI Responses",
      li: "Generates instant, context-aware replies to user queries for a natural chat experience.",
    },
    {
      ul: "⚛️ Modular React Components",
      li: "Structured with reusable React components for easy maintenance and future scaling.",
    },
    {
      ul: "🎭 Toggleable Chat Window",
      li: "Opens and closes with smooth animations for a polished user experience.",
    },
    {
      ul: "🌙 Dark Mode Support",
      li: "Switches seamlessly between light and dark themes to match the website's appearance.",
    },
    {
      ul: "📱 Fully Responsive",
      li: "Works smoothly across desktop and mobile devices.",
    },
  ],
  technology_used: [
    {
      icon: react,
      name: "React js",
      color: "#61DAFB",
    },
    {
      icon: react_icons,
      name: "React Icons",
      color: "#e91e63",
    },
    {
      icon: tailwind_css,
      name: "Tailwind CSS",
      color: "#06B6D4",
    },
  ],
  api_used: [
    {
      name: "Gemini API",
      link: "https://ai.google.dev/gemini-api/docs",
      text: "Used to generate AI-powered responses to user input.",
    },
  ],
  video: utaVid,
  img: uta,
  future_ideas: [
    "🎨 Custom business branding and theming",
    "📊 Analytics dashboard to monitor chatbot usage",
    "🎙️ Voice-enabled interaction",
  ],
}
];