import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FetchData from '../container/Fetchdata';
import { SearchMovie } from '../actions';
import './Searchinput.css';

const SearchInput = ({ getMovie }) => {
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
      FetchData(movie.movieTitle).then((res) => getMovie(res));
    }
    setMovie({
      movieTitle: '',
    });
  };
  return (
    <div className=" ">
      <form className="d-flex w-100 justify-content-around text-center mt-3 ">
        <input
          type="input"
          placeholder="enter movie title"
          id="input-title"
          value={movie.movieTitle}
          onChange={handleChange}
          className="w-25 input-form text-center"
        />
        <div>
          <button type="button" className="bg-dark text-white px-3 rounded py-1" onClick={handleSubmit}>search </button>
        </div>
      </form>
    </div>
  );
};
SearchInput.propTypes = {
  getMovie: PropTypes.func.isRequired,
};
const mapDispatchToProps = (dispatch) => ({
  getMovie: (movie) => dispatch(SearchMovie(movie)),
});
export default connect(null, mapDispatchToProps)(SearchInput);
