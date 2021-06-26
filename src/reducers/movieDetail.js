import { SEARCH_MOVIE_DETAIL } from '../actions';

const initialState = {
  title: '',
  year: '',

};
const movieDetail = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_MOVIE_DETAIL:
      return {
        ...state, title: action.movie.Title, year: action.movie.Year,
      };

    default:
      return state;
  }
};
export default movieDetail;
