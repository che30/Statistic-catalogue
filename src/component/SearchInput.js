import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchInput = () => {
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
  const handleSubmit = (event) => {
    console.log(event.target);
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
export default SearchInput;
