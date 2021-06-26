import React, { useState, useEffect } from 'react';

const movieDetails = (props) => {
  const [movieData, setMovieData] = useState({});
  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=42852a78&i=${props.location.state.imdbID}`)
      .then((response) => response.json())
      .then((result) => {
        setMovieData({
          movieData: result,
        });
      });
  }, []);
  if (Object.keys(movieData).length === 0) {
    return (
      <div className="text-center h1">
        Loading movies
      </div>
    );
  }
  console.log(movieData.movieData);
  return (
    <div className="mt-5 text-center">
      <img className="w-50" src={movieData.movieData.Poster} alt={movieData.movieData.Title} />

      <div>
        <span> Title: </span>
        {movieData.movieData.Title}
      </div>

      <div>
        <span> Date released: </span>
        {movieData.movieData.Released}
      </div>
      <div>
        <span> Genre: </span>
        {movieData.movieData.Genre}
      </div>
      <div>
        <span> Country: </span>
        {movieData.movieData.Country}
      </div>
      <div>
        <span> Actor: </span>
        {movieData.movieData.Actors}
      </div>
      <div>
        <span>Director: </span>
        {movieData.movieData.Director}
      </div>
      <div>
        <span>Awards: </span>
        {movieData.movieData.Awards}
      </div>
      <div>
        <span>Writer: </span>
        {movieData.movieData.Writer}
      </div>
      <div>
        <span>Year: </span>
        {movieData.movieData.Year}
      </div>
      <div>
        <span>Production:  </span>
        {movieData.movieData.Production}
      </div>
    </div>
  );
};

export default (movieDetails);
