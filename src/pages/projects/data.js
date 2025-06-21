import weather from "../../assets/projects/Weather Dashboard.png"
import weatherVid from "../../assets/projects/Weather.mp4"
import century from "../../assets/projects/Century.png"
import centuryVid from "../../assets/projects/Century.mp4"
import musify from "../../assets/projects/Musify.png"
import musifyVid from "../../assets/projects/Musify.mp4"
import ticTac from "../../assets/projects/Tic Tac Toe.png"
import ticTacVid from "../../assets/projects/Tic Tac.mp4"
import react from "../../assets/icons/react.svg"
import react_icons from "../../assets/icons/react-icons.svg"
import react_router from "../../assets/icons/react-router.svg"
import redux from "../../assets/icons/redux.svg"
import css from "../../assets/icons/css.svg"
import moment from "../../assets/icons/moment.svg"
import firebase from "../../assets/icons/firebase.svg"
import leaflet from "../../assets/icons/leaflet.svg"
import tailwind_css from "../../assets/icons/tailwind-css.svg"

export const projectData = [
    {
        title : "Weather Dashboard",
        description : "A responsive React-based weather dashboard that lets users search any city and view real-time weather, 3-day and hourly forecasts, and interact with a Leaflet map displaying saved locations. Features include dark mode, persistent storage via localStorage, and smooth client-side routing using React Router.",
        short_description : "A responsive React-based weather dashboard that lets users search any city and view real-time weather, 3-day and hourly forecasts, and interact with a Leaflet map displaying saved locations.",
        live_demo : "https://jatinmanhotra.github.io/react-weather-app/#/dashboard",
        github_page: "https://github.com/JatinManhotra/react-weather-app",
        key_features: [
           { 
            ul : "🔍 City Search",
            li : "Search any city worldwide and fetch real-time weather data."
            },
           { 
            ul : "🌇 Forecast & Highlights",
            li : "Shows highs and lows, humidity, pressure, UV index, wind speed and hourly forecast for the day. 3-days forecast with icons and detailed data."
            },
           { 
            ul : "🌎 Interactive Map",
            li : 'Uses <span className = "font-bold text-white">Leaflet.js</span> to display a dynamic map. Clicking on a city fetches the weather'
            },
           { 
            ul : "🏙️ Saved Cities Panel",
            li : "Displays weather previews for saved cities. Clicking a city updates the main dashboard"
            },
           { 
            ul : "🔄 Navigation",
            li : "Integrated with React Router for client-side routing."
            },
           { 
            ul : "🌗 Dark Mode Support",
            li : "Toggle between light and dark themes. Stored in local storage"
            },
           { 
            ul : "📦 Local Storage",
            li : "Persists saved cities and dark theme preference using local storage. Auto reload previous state on page reload"
            },
           { 
            ul : "🧭 Auto Timezone Support",
            li : "UI dynamically adjusts background theme based on current weather conditions and time."
            },
           { 
            ul : "📱 Responsive UI",
            li : "Clean and modern UI with responsive layouts for mobile, tablet, and desktop."
            },
        ] ,
        technology_used: [
            {
            icon: react ,
            name: "React js" ,
            },
            {
            icon: react_router ,
            name: "React Router DOM" ,
            },
            {
            icon: react_icons ,
            name: "React Icons" ,
            },
            {
            icon: moment ,
            name: "Moment js" ,
            },
            {
            icon: leaflet ,
            name: "Leaflet js" ,
            },
            {
            icon: tailwind_css ,
            name: "Tailwind CSS" ,
            }
    ],
        api_used: [
            {
                name : "WeatherAPI",
                link : "https://www.weatherapi.com/",
                text : "Real-time weather conditions, hourly and weekly forecast."
            }
            ],
        video : weatherVid,
        img : weather,
        future_ideas:[ "Add user geolocation detection on load", "Show real-time weather alerts or warnings"]
    },
    {
        title : "Musify - Music Streaming App",
        description : "A dynamic and responsive music streaming web application built with React, inspired by platforms like Spotify and Apple Music. It allows users to explore trending music, search for songs, view artists and albums, and interact with an intuitive music player with full controls.",
        short_description : "A dynamic and responsive music streaming web application built with React, inspired by platforms like Spotify and Apple Music.",
        live_demo : "https://jatinmanhotra.github.io/react-musify/",
        github_page: "https://github.com/JatinManhotra/react-musify",
        key_features: [
           { 
            ul : "📊 Music Discovery",
            li : "Sections for Top Charts, Albums, Artists and Playlists. Dedicated Song, Album, and Artist detail pages."
            },
           { 
            ul : "🔍 Search Functionality",
            li : "Search results page shows fetched songs with artist info."
            },
           { 
            ul : "🎹 Interactive Music Player",
            li : 'Full player with controls like Play/Pause, Next, Previous etc with on-click status message'
            },
           { 
            ul : "💻 UI/UX Enhancements",
            li : "Skeleton loaders while the data is being fetched. Fully responsive layout for every screen size."
            },
           { 
            ul : "🧠 State Management & Performance",
            li : "Redux Toolkit with RTK Query for API and state. Context API for cross-component communication."
            },
           { 
            ul : "🧭 Routing & Navigation",
            li : "react-router-dom for seamless page navigation."
            },
           { 
            ul : "🛡️ Deployment & CORS Handling",
            li : "Uses RapidAPI's deezerDevs endpoint with custom headers."
            }
        ] ,
        technology_used: [
            {
            icon: react ,
            name: "React js" ,
            },
            {
            icon: react_router ,
            name: "React Router DOM" ,
            },
            {
            icon: redux ,
            name: "Redux Toolkit + RTK Query" ,
            },
            {
            icon: react ,
            name: "Context API" ,
            },
            {
            icon: react_icons ,
            name: "React Icons" ,
            },
            {
            icon: tailwind_css ,
            name: "Tailwind CSS" ,
            }
    ],
        api_used: [
            {
                name : "Deezer API via RapidAPI",
                link : "https://rapidapi.com/deezerdevs/api/deezer-1",
                text : "Tracks, Artists, Albums, Charts, Playlists, Search."
            }
            ],
        video : musifyVid,
        img : musify,
        future_ideas:[ "User authentication (Firebase/Auth0)", 
            "Save favorite songs and playlists to database",
            "Dark/Light mode toggle",
            "Lyrics integration with synced playback",
            "Audio visualizations",
        ]
    },
    {
        title : "Tic Tac Toe",
        description : "A fully interactive and responsive Tic Tac Toe web app built using React. This project showcases both classic Player vs Player (PvP) mode and a smart Player vs Computer (PvC) mode with basic AI logic. It focuses on intuitive design, human-readable code, and clean gameplay logic - ideal for casual players.",
        short_description : "A fully interactive and responsive Tic Tac Toe web app built using React. This project showcases both PvP mode and a PvC mode with basic AI logic.",
        live_demo : "https://jatinmanhotra.github.io/react-tic-tac-toe/",
        github_page: "https://github.com/JatinManhotra/react-tic-tac-toe",
        key_features: [
           { 
            ul : "🎮 Two Game Modes",
            li : "Player vs Player (PvP) and Player vs Computer (PvC)."
            },
           { 
            ul : "✅ Win Detection Logic",
            li : "Highlights the winning combination visually."
            },
           { 
            ul : "🏁 Game Status Updates",
            li : 'Real-time feedback on the current turn. Tracks and displays player scores across rounds. '
            },
           { 
            ul : "🧠 Smart Computer AI",
            li : "AI attempts to win if possible. If not, it blocks the player from winning."
            },
           { 
            ul : "🔁 Game Reset Button",
            li : "Resets the board while keeping scores intact."
            },
           { 
            ul : "📱 Fully Responsive Design",
            li : "Optimized layout and controls for mobile, tablet, and desktop. Uses media queries for smooth UI scaling."
            },
           { 
            ul : "🎨 Custom Styling",
            li : "Each player's symbol (X/O) has distinct colors. Winning squares get a highlight color."
            }
        ] ,
        technology_used: [
            {
            icon: react ,
            name: "React js" ,
            },
            {
            icon: css ,
            name: "CSS3" ,
            }
            
    ],
        video : ticTacVid,
        img : ticTac,
        future_ideas:[ " Difficulty Levels: Add easy, medium, and hard AI difficulty.", 
            "Sound Effects: Add click and win sounds.",
            "Local Storage: Save scores and game mode across sessions.",
            "Multiplayer Online Mode (with WebSockets or Firebase)",
        ]
    },
    {
        title : "Century AI",
        description : "A responsive AI chat app built with React, Firebase, and the Gemini API, enabling users to interact with an AI assistant in real-time. Features include chat history with rename/delete options, authentication via Firebase, dark mode with per-user preferences, and persistent storage of conversations. The app supports deep linking to specific chats, real-time UI updates, and client-side routing with React Router.",
        short_description : "A responsive AI chat app built with React, Firebase, and the Gemini API, enabling users to interact with an AI assistant in real-time.",
        live_demo : "https://jatinmanhotra.github.io/react-century/",
        github_page: "https://github.com/JatinManhotra/react-century",
        key_features: [
           { 
            ul : "🔐 Authentication",
            li : "Firebase Authentication with Email & Password ( Login and Signup )."
            },
           { 
            ul : "💬 AI Chat Experience",
            li : "Users can send prompts and receive responses from Google Gemini API (gemini-2.0-flash). AI responses are streamed with loading indicators."
            },
           { 
            ul : "📁 Conversations",
            li : 'Each conversation is stored as an object with : id, title, messages array and a timestamp. Sidebar displays recent chats.'
            },
           { 
            ul : "🛠 Conversation Tools",
            li : "Rename conversation, Delete conversation, Create new conversation."
            },
           { 
            ul : "🌗 Dark Mode",
            li : "Dark mode state saved per user in Firestore. Auto applies on page reload."
            },
           { 
            ul : "📱 Responsive Design",
            li : "Uses TailwindCSS for consistent styling. Responsive layouts for every screen size."
            },
           { 
            ul : "🔗 Share Feature",
            li : "Share your conversation via link."
            }
        ] ,
        technology_used: [
            {
            icon: react ,
            name: "React js" ,
            },
            {
            icon: react_router ,
            name: "React Router DOM" ,
            },
            {
            icon: react ,
            name: "Context API" ,
            },
            {
            icon: react_icons ,
            name: "React Icons" ,
            },
            {
            icon: firebase ,
            name: "Firebase" ,
            },
            {
            icon: tailwind_css ,
            name: "Tailwind CSS" ,
            }
    ],
        api_used: [
            {
                name : "Gemini API",
                link : "https://ai.google.dev/gemini-api/docs",
                text : "Used to generate AI responses based on user prompts. Model: gemini-2.0-flash"
            },
            {
                name : "Firebase",
                link : "https://firebase.google.com/",
                text : "Auth and Firestore used for user management and persistent data storage."
            }
            ],
        video : centuryVid,
        img : century,
        future_ideas:[ "Export/Download conversation as text or PDF", 
            "Voice input/output",
            "Upload files and send them to AI",
            "Image generation from a prompt",
            "Model selection (e.g., Gemini Pro, Claude, etc.)",
        ]
    },
]