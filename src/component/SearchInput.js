import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FetchData from '../searchapi/Fetchdata';
import { SearchMovie, TypedMovieTitle } from '../actions';
import '../assets/Searchinput.css';

const SearchInput = ({ getMovie, typedMovie, movie }) => {
  const handleChange = (e) => {
    if (e.target.id === 'input-title') {
      typedMovie(e.target.value);
    }
  };
  const handleSubmit = () => {
    if (movie.title !== '') {
      FetchData(movie.title).then((res) => getMovie(res));
    }
    typedMovie('');
  };
  return (
    <div className=" search-form mt-5">
      <form className="d-flex w-100 justify-content-around text-center mt-3 ">
        <input
          type="input"
          placeholder="enter movie title"
          id="input-title"
          value={movie.title}
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
SearchInput.defaultProps = {
  typedMovie() {},
  movie: {},
};
SearchInput.propTypes = {
  getMovie: PropTypes.func.isRequired,
  typedMovie: PropTypes.func,
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }),
};
const mapStateProps = (state) => ({
  movie: state.movie,
});
const mapDispatchToProps = (dispatch) => ({
  getMovie: (movie) => dispatch(SearchMovie(movie)),
  typedMovie: (title) => dispatch(TypedMovieTitle(title)),
});
export default connect(mapStateProps, mapDispatchToProps)(SearchInput);
