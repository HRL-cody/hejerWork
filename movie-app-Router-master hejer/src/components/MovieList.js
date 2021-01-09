import React from "react";
import MovieCard from "./MovieCard";
import AddMovie from "./AddMovie";
import "../index.css";

const MovieList = ({ movielist, handleAdd }) => {
  return (
    <div>
      <AddMovie addMovie={handleAdd} />
      <div className="movielistStyle">
        {movielist.map((movie) => (
          <MovieCard film={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
