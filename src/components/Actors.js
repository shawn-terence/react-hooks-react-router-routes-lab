import React from "react";
import { actors } from "../data";

function Actors() {
  return(
    <>
      {actors.map((actor)=>(
        <div key={actor.id}>
          <h1>{actor.name}</h1>
          {actors.map((movie)=><ul>
            <li key={movie.name}>{movie.movies}</li>
          </ul>)}
        </div>
      ))}
    </>
  )
}

export default Actors;
