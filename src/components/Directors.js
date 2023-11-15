import React from "react";
import { directors } from "../data";

function Directors() {
  return( 
  <>
    {directors.map((director)=>(
    <div key={director.id}>
      <h1>{director.name}</h1>
      {directors.map((movie)=>(<ul>
        <li key={movie.name}>{movie.movies}</li>
      </ul>))}
    </div>))}
  </>)
}

export default Directors;
