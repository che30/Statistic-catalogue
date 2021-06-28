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

const Movies = ({
  movie, FetchApidata, changeFilter,
  yearfiltre,
}) => {
  if (yearfiltre.slice(0, 4)) {
    // console.log(yearfiltre.slice(0, 4));
  }
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
        There was an error fetching this movie check your internet connection
      </div>
    );
  } if (movie.movies === undefined) {
    return (
      <div>
        sorry we are not able to find this movie
      </div>
    );
  }
  let filteredMovies = [];
  // console.log(movie.movies[0].Year);
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
    <div>
      <YearFilter changeFilter={changeFilter} />
      ,
      <div className="d-flex justify-content-around flex-wrap">
        {filteredMovies.map((elt) => (
          <div key={elt.imbdID}>
            <Link
              to={{
                pathname: '/movieDetails',
                state: { imdbID: elt.imdbID },
              }}
              key={elt.imbdID}
            >
              <img src={elt.Poster} key={elt.imbdID} alt="batman" />
            </Link>
          </div>
        ))}
      </div>
    </div>

  );
};
// Movies.defaultProps = {
//   yearFilter: 'All',
// };
Movies.propTypes = {
  FetchApidata: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  // yearFilter: PropTypes.string,
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
