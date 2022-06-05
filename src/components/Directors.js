import React from "react";
import { directors } from "../data";
import { uuid } from "uuidv4"

function Directors() {
  const directorsInfo = directors.map((director) => {
    return <div key={director.name}><strong>Name: {director.name}</strong> <ul>Movies: {director.movies.map((movie) => <li key={uuid()}>{movie}</li>)}</ul></div>
  })
  return (
    <div>
      <h1>Directors Page</h1>
      {directorsInfo}
    </div>
  )
}

export default Directors;
