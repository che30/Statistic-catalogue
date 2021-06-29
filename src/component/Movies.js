/* eslint-disable react/require-default-props */
/* eslint-disable react/prop-types */

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Link,
} from 'react-router-dom';
import { FetchApidata, FilterYear } from '../actions';
import YearFilter from './YearFilter';
import './Movies.css';

const Movies = ({
  movie, FetchApidata, changeFilter,
  yearfiltre,
}) => {
  useEffect(() => {
    FetchApidata();
  }, []);
  if (movie.loading) {
    return (
      <div>
        loading movie data
      </div>
    );
  } if (movie.error === undefined) {
    return (
      <div className="text-center mt-5 alert alert-danger text-dark">
        There was an error fetching this movie check your internet connection
      </div>
    );
  } if (movie.movies === undefined) {
    return (
      <div className="text-center mt-3 alert alert-info text-dark">
        sorry we are not able to find this movie
      </div>
    );
  }
  let filteredMovies = [];
  if (yearfiltre.slice(0, 4)) {
    if (yearfiltre !== 'All') {
      movie.movies.map((movie) => {
        if (movie.Year === yearfiltre.slice(0, 4)
        || movie.Year === (Number(yearfiltre.slice(0, 4)) + 1).toString()
        || movie.Year === (Number(yearfiltre.slice(0, 4)) + 2).toString()) {
          filteredMovies.push(movie);
        }
        return false;
      });
    } else {
      filteredMovies = [...movie.movies];
    }
  }
  return (
    <div className="pb-5">
      <YearFilter changeFilter={changeFilter} />
      ,
      <div className="container">

        <div className="row ">
          {filteredMovies.map((elt) => (
            <div key={elt.imbdID} className="pt-4 pr-3 col-4 ">
              <Link
                to={{
                  pathname: '/movieDetails',
                  state: { imdbID: elt.imdbID },
                }}
                key={elt.imbdID}
                className="text-decoration-none"
              >
                <img src={elt.Poster} key={elt.imbdID} alt="batman" />
                <div className="subtitle">
                  <div>{elt.Title}</div>
                  <div>{elt.Year}</div>
                </div>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </div>

  );
};
Movies.propTypes = {
  FetchApidata: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  movie: state.movie,
  yearfiltre: state.YearFilter,

});
const mapDispatchToProps = (dispatch) => ({
  FetchApidata: () => dispatch(FetchApidata()),
  changeFilter: (category) => dispatch(FilterYear(category)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Movies);
/* eslint-enable react/require-default-props */
