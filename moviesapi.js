import { movieapikey } from "./apikey"; // Your OMDB API key
import axios from "axios";

// Base URL for OMDB API
const apiBaseUrl = "http://www.omdbapi.com/";

// Function to make API calls
const movieApiCall = async (endpoint) => {
  try {
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error) {
    console.error("API call error:", error);
    return {};
  }
};

// Search Movies
export const searchMovies = (query) => {
  const endpoint = `${apiBaseUrl}?s=${encodeURIComponent(query)}&apikey=${movieapikey}`;
  return movieApiCall(endpoint);
};

// Fetch Movie Details
export const fetchMovieDetails = (id) => {
  const endpoint = `${apiBaseUrl}?i=${id}&apikey=${movieapikey}`;
  return movieApiCall(endpoint);
};

// Example function to fetch movie details by title
export const fetchMovieDetailsByTitle = (title) => {
  return searchMovies(title).then((data) => {
    if (data.Search && data.Search.length > 0) {
      return fetchMovieDetails(data.Search[0].imdbID); // Fetch details for the first movie found
    }
    return null;
  });
};

// Example function to get movie poster URL
export const getMoviePosterUrl = (posterPath) => {
  return posterPath ? posterPath : null; // OMDB returns the full URL for the poster
};