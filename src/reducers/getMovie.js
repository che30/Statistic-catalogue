import {
  SEARCH_MOVIE,
  SEARCH_MOVIE_SUCCES,
  SEARCH_MOVIE_FAILURE,
  FETCH_MOVIE_REQUEST,
}
  from '../actions';

const initialState = {
  title: 'batman',
  loading: true,
  movies: [],
  error: '',
  year: '',
  imbdID: '',

};
const getMovie = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_MOVIE:
      return {
        ...state,
        movies: action.movies,
        title: action.movies.Title,
        year: action.movies.Year,
        imbdID: action.movies.imdbID,
      };
    case FETCH_MOVIE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_MOVIE_SUCCES:
      return {
        loading: false,
        movies: action.payload,
        title: action.payload.Title,
        error: '',
        year: action.payload.Year,
        imbdID: action.payload.imdbID,
      };
    case SEARCH_MOVIE_FAILURE:
      return {
        loading: false,
        movies: [],
        error: action.payload,
      };

    default:
      return state;
  }
};
export default getMovie;
