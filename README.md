# Movie Cinema

A React Native application that allows users to search for movies, view details, and explore cast information. Built using Expo, React Navigation, and Tailwind CSS with NativeWind for styling.

## Features

- Search for movies by title
- View detailed information about each movie
- Explore cast and crew information
- Save favorite movies for later viewing
- Responsive design for both mobile and web

## Technologies Used

- **React Native**: Framework for building native apps using React.
- **Expo**: Toolchain for React Native that simplifies development.
- **React Navigation**: Navigation library for managing routes and navigation in the app.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **NativeWind**: Tailwind CSS for React Native.
- **Axios**: Promise-based HTTP client for making API requests.
- **React Query**: Library for fetching, caching, and synchronizing server state in React applications.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 14 or later)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (install globally using `npm install -g expo-cli`)
- A code editor (like [Visual Studio Code](https://code.visualstudio.com/))

## Installation

1. **Clone the repository**:
   Open your terminal and run the following command to clone the project:
   ```bash
   git clone https://github.com/yourusername/moviecinema.git
   cd moviecinema
Install dependencies: After navigating to the project directory, run:

npm install
Start the development server: To start the Expo development server, run:

npm start
Run on Android or iOS:

For Android, you can run:

npm run android
For iOS, you can run:

npm run ios
Run on Web: To run the application in a web browser, use:

npm run web
Usage
Open the app and use the search bar to find your favorite movies.
Click on a movie to view its details, including the cast and crew.
Save movies to your favorites for easy access later.

Contributing
Contributions are welcome! If you have suggestions for improvements or want to add features, please feel free to submit a pull request or open an issue.

Acknowledgments
OMDb API for movie data.
Expo for simplifying React Native development.
Tailwind CSS for utility-first styling.


movihive/
├── assets/                     # Folder for images and other static assets
│   ├── icon.png                # App icon
│   ├── splash.png              # Splash screen image
│   └── other-assets/...        # Any other assets (e.g., logos, background images)
├── src/                        # Main source code folder
│   ├── components/             # Reusable components
│   │   ├── MovieCard.js        # Component for displaying individual movie cards
│   │   ├── SearchBar.js        # Component for the search input
│   │   └── Loading.js          # Loading indicator component
│   ├── screens/                # Screens for different app views
│   │   ├── HomeScreen.js       # Main screen with movie search functionality
│   │   ├── MovieDetailsScreen.js# Screen for displaying movie details
│   │   └── FavoritesScreen.js   # Screen for displaying favorite movies
│   ├── navigation/             # Navigation setup
│   │   └── AppNavigation.js     # Main navigation configuration
│   ├── utils/                  # Utility functions and constants
│   │   └── moviesapi.js        # API functions for fetching movie data
│   ├── App.js                  # Main application component
│   └── index.js                # Entry point for the application
├── .gitignore                  # Git ignore file
├── app.json                    # Expo configuration file
├── babel.config.js             # Babel configuration file
├── package.json                # Project dependencies and scripts
└── README.md                   # Project documentation
 
 
