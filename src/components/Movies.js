import React from "react";
import { movies } from "../data";
import { uuid } from "uuidv4"

function Movies() {
  const movieInfo = movies.map((movie) => {
    return <div key={movie.title}><strong>Name: {movie.title}</strong> Time: {movie.time} <ul>Genres:{movie.genres.map((genre) => <li key={uuid()}>{genre}</li>)}</ul> </div>
  })

  return (
    <div>
      <h1>Movies Page</h1>
      {movieInfo}
    </div>
  )
}

export default Movies;
