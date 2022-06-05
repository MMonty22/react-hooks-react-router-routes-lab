import React from "react";
import { actors } from "../data";
import { uuid } from "uuidv4"

function Actors() {
  const actorsInfo = actors.map((actor) => {
    return <div key={actor.name}><strong>Name: {actor.name}</strong> <ul>Movies: {actor.movies.map((movie) => <li key={uuid()}>{movie}</li>)}</ul></div>
  })
  return (
    <div>
      <h1>Actors Page</h1>
      {actorsInfo}
    </div>
  )
}

export default Actors;
