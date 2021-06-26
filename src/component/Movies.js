/* eslint-disable react/require-default-props */
/* eslint-disable react/prop-types */

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Link,
} from 'react-router-dom';
import { FetchApidata } from '../actions';

const Movies = ({ movie, FetchApidata }) => {
  useEffect(() => {
    FetchApidata();
  }, []);
  if (movie.loading) {
    return (
      <div>
        loading movie data
      </div>
    );
  } if (movie.error) {
    return (
      <div>
        {movie.error}
      </div>
    );
  } if (movie.movies === undefined) {
    return (
      <div>
        sorry we are not able to find this movie
      </div>
    );
  }
  return (
    <div>
      <Link to="/movieDetails">{movie.movies.map((elt) => <img src={elt.Poster} key={elt.imbdID} alt="batman" />)}</Link>
    </div>
  );
};
Movies.propTypes = {
  FetchApidata: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  movie: state,
});
const mapDispatchToProps = (dispatch) => ({
  FetchApidata: () => dispatch(FetchApidata()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Movies);
/* eslint-enable react/require-default-props */
