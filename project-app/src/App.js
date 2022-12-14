import "./App.css";
import { useState, useEffect } from "react";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";
// 1a9e4fba

const API_URL = "http://www.omdbapi.com?apikey=1a9e4fba";

const movie1 = {
  Title: "Shrek",
  Year: "2001",
  imdbID: "tt0126029",
  Type: "movie",
  Poster: "N/A",
};

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Shrek");
  }, []);

  return (
    <div className="app">
      <h1>MovieWorld </h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
