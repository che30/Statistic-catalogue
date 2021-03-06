import { SEARCH_MOVIE_DETAILS } from '../actions';

const initState = {
  poster: '',
  title: '',
  released: '',
  genre: '',
  actor: '',
  director: '',
  award: '',
  writer: '',
  year: '',
  production: '',
  country: '',

};
const MovieDetailsReducer = (state = initState, action) => {
  switch (action.type) {
    case SEARCH_MOVIE_DETAILS:
      return {
        ...state,
        poster: action.detail.Poster,
        title: action.detail.Title,
        released: action.detail.Released,
        genre: action.detail.Genre,
        actor: action.detail.Actors,
        director: action.detail.Director,
        award: action.detail.Awards,
        writer: action.detail.Writer,
        year: action.detail.Year,
        production: action.detail.Production,
        country: action.detail.Country,

      };
    default:
      return state;
  }
};
export default MovieDetailsReducer;
