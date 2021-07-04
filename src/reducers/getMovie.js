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
      if (action.movies) {
        if (action.movies[0].movies) {
          if ('error' in action.movies[0].movies) {
            return {
              ...state,
              movies: action.movies,
              title: action.movies.Title,
              year: action.movies.Year,
              error: action.movies[0].movies.error,
              imbdID: action.movies.imdbID,
            };
          }
        }
        return {
          ...state,
          movies: action.movies,
          title: action.movies.Title,
          year: action.movies.Year,
          error: action.movies.error,
          imbdID: action.movies.imdbID,
        };
      }
      break;
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
  return false;
};
export default getMovie;
