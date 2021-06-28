/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FetchdefaultData } from '../container/Fetchdata';
import { SearchMovie } from '../actions';
// import YearFilter from './YearFilter';

const SearchInput = ({ getMovie }) => {
  FetchdefaultData();
  const [movie, setMovie] = useState({
    movieTitle: '',
  });
  const handleChange = (e) => {
    if (e.target.id === 'input-title') {
      setMovie({
        ...movie, movieTitle: e.target.value,
      });
    }
  };
  // console.log(storemovie);
  const handleSubmit = () => {
    if (movie.movieTitle !== '') {
      fetch(`http://www.omdbapi.com/?apikey=42852a78&s=${movie.movieTitle}`)
        .then((response) => response.json())
        .then((response) => {
          getMovie(response.Search);
        });
    }
    setMovie({
      movieTitle: '',
    });
  };
  return (
    <div className="d-flex align-items-baseline justify-content-around">
      <form className="d-flex mt-3">
        <input
          type="input"
          placeholder="enter movie title"
          id="input-title"
          value={movie.movieTitle}
          onChange={handleChange}
        />
        <button type="button" onClick={handleSubmit}>search </button>
      </form>
      {/* <YearFilter changeFilter={changeFilter} /> */}
    </div>
  );
};
SearchInput.propTypes = {
  getMovie: PropTypes.func.isRequired,
  // changeFilter: PropTypes.func.isRequired,
};
// const mapStateProps = (state) => ({
//   storemovie: state.movie,
// });
const mapDispatchToProps = (dispatch) => ({
  getMovie: (movie) => dispatch(SearchMovie(movie)),
  // changeFilter: (category) => dispatch(FilterYear(category)),
});
export default connect(null, mapDispatchToProps)(SearchInput);
