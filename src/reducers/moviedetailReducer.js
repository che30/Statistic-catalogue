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
      console.log(action.detail.Poster);
      return {
        ...state,
        poster: action.detail.Poster,
        title: action.detail.Title,
        released: action.detail.Released,
        genre: action.detail.Genre,
        actor: action.detail.Actor,
        director: action.detail.Director,
        award: action.detail.Award,
        writer: action.detail.Writer,
        year: action.detail.Year,
        producer: action.detail.Producer,
        country: action.detail.country,

      };
    default:
      return state;
  }
};
export default MovieDetailsReducer;
