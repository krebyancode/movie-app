import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?api_key=cd4db09fe52db565ea47ac340d5354ed";
const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?api_key=cd4db09fe52db565ea47ac340d5354ed&query=";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const { currentUser } = useContext(UserContext);

  const getMovies = (url) => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setMovies(data.results));
  };

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentUser) {
      getMovies(SEARCH_API + search);
    } else {
      alert("please login.");
    }
    setSearch("");
  };

  return (
    <>
      <form className="search" onSubmit={handleSubmit}>
        <input
          type="search"
          className="search-input"
          placeholder="Search a movie..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div className="movie-container">
        {movies.map((movie) => (
          <Card movie={movie} key={movie.id} />
        ))}
      </div>
    </>
  );
};

export default Main;
