import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MovieList.css';
const MovieList = ({movies}) => {
  return (
    <div className='movielist' >
      { 
      movies.map((movie)=>
        {
          return < MovieCard movie ={movie} />;

        })
      }
    </div>
  )
}

export default MovieList;
