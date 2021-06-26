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
    <div>
      <img src={movieData.movieData.Poster} alt={movieData.movieData.Title} />
      <div>{movieData.movieData.Title}</div>
      <div>{movieData.movieData.Actors}</div>
      <div>{movieData.movieData.Director}</div>
      <div>{movieData.movieData.Awards}</div>
      <div>{movieData.movieData.Writer}</div>
      <div>{movieData.movieData.Year}</div>
      <div>{movieData.movieData.Production}</div>
    </div>
  );
};
// const mapDispatchToProps = (dispatch) => ({
//   search: (movie) => { dispatch(searchMovieDetail(movie)); },
// });

export default (movieDetails);
