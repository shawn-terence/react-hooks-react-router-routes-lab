import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h1>{movie.title}</h1>
          <p>Genres: {movie.genres.join(', ')}</p>
          <p>Time: {movie.time}</p>
        </div>
      ))}
    </div>
  );
}

export default Movies;
