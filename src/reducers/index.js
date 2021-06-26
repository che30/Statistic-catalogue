import { combineReducers } from 'redux';
import movieDetail from './movieDetail';
import getMovie from './getMovie';

const rootReducer = () => combineReducers({
  movieDetail,
  movie: getMovie,
});
export default rootReducer;
