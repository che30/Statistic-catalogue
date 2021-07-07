const SEARCH_MOVIE = 'SEARCH MOVIE';
const FETCH_MOVIE_REQUEST = 'SEARCH REQUEST';
const SEARCH_MOVIE_SUCCES = 'SUCCESS';
const SEARCH_MOVIE_FAILURE = 'FAILURE';
const YEAR_FILTER = 'YEAR FILTER';
const SearchMovie = (movies) => ({
  type: SEARCH_MOVIE,
  movies,
});
const FetchMovieRequest = () => ({
  type: FETCH_MOVIE_REQUEST,
});
const FetchMovieSucces = (movie) => ({
  type: SEARCH_MOVIE_SUCCES,
  payload: movie,
});
const SearchMovieFailure = (error) => ({
  type: SEARCH_MOVIE_FAILURE,
  error,
});
const FetchApidata = () => (dispatch) => {
  dispatch(FetchMovieRequest);
  fetch('https://www.omdbapi.com/?apikey=42852a78&s=batman')
    .then((response) => response.json())
    .then((response) => {
      dispatch(FetchMovieSucces([...response.Search]));
    })
    .catch((err) => {
      const errMsg = err.message;
      dispatch(SearchMovieFailure(errMsg));
    });
};
const FilterYear = (year) => ({
  type: YEAR_FILTER,
  year,
});
export {
  SearchMovie, FetchMovieRequest,
  FetchApidata,
  FilterYear,
  YEAR_FILTER,
  SEARCH_MOVIE_FAILURE,
  SEARCH_MOVIE_SUCCES,
  FETCH_MOVIE_REQUEST,
  SEARCH_MOVIE,
};
