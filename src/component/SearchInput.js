import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FetchdefaultData } from '../container/Fetchdata';
import { SearchMovie } from '../actions';

const SearchInput = ({ search }) => {
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

  const handleSubmit = () => {
    if (movie.movieTitle !== '') {
      fetch(`http://www.omdbapi.com/?apikey=42852a78&s=${movie.movieTitle}`)
        .then((response) => response.json())
        .then((response) => {
          search(response.Search);
        });
    }
    setMovie({
      movieTitle: '',
    });
  };
  return (
    <>
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
    </>
  );
};
SearchInput.propTypes = {
  search: PropTypes.func.isRequired,
};
const mapDispatchToProps = (dispatch) => ({
  search: (movie) => { dispatch(SearchMovie(movie)); },
});
export default connect(null, mapDispatchToProps)(SearchInput);
