import React, { useState, useEffect } from 'react';
import {
  Link,
} from 'react-router-dom';
import Navbar from './Navbar';
import './movieDetail.css';

const MovieDetails = (props) => {
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
        Loading movie
      </div>
    );
  }
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="mt-5 text-center">
        <div className="container ">
          <div className="row">
            <div className="col-4 mx-auto">
              <img src={movieData.movieData.Poster} alt={movieData.movieData.Title} />
            </div>
          </div>

          <div>
            <span className="t-dark"> Title: </span>
            <span className="text-primary">{movieData.movieData.Title}</span>
          </div>

          <div>
            <span className="t-dark"> Date released: </span>
            <span className="text-primary">{movieData.movieData.Released}</span>
          </div>
          <div>
            <span className="t-dark"> Genre: </span>
            <span className="text-primary">
              {' '}
              {movieData.movieData.Genre}
            </span>
          </div>
          <div>
            <span className="t-dark"> Country: </span>
            <span className="text-primary">{movieData.movieData.Country}</span>
          </div>
          <div>
            <span className="t-dark"> Actor: </span>
            <span className="text-primary">{movieData.movieData.Actors}</span>
          </div>
          <div>
            <span className="t-dark">Director: </span>
            <span className="text-primary">{movieData.movieData.Director}</span>
          </div>
          <div>
            <span className="t-dark">Awards: </span>
            <span className="text-primary">{movieData.movieData.Awards}</span>
          </div>
          <div>
            <span className="t-dark">Writer: </span>
            <span className="text-primary">{movieData.movieData.Writer}</span>
          </div>
          <div>
            <span className="t-dark">Year: </span>
            <span className="text-primary">{movieData.movieData.Year}</span>
          </div>
          <div>
            <span className="t-dark">Production:  </span>
            <span className="text-primary">{movieData.movieData.Production}</span>
          </div>
        </div>
        <div className="text-center mx-auto py-3  mb-5 mt-3 h3 bg-dark w-25 text-danger">
          <Link className="text-danger text-decoration-none" to="/">
            BACK TO HOME
          </Link>

        </div>
      </div>
    </div>
  );
};

export default (MovieDetails);
