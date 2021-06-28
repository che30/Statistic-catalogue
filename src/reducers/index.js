import { combineReducers } from 'redux';
import movieDetail from './movieDetail';
import getMovie from './getMovie';
import YearFilter from './yearFilter';

const rootReducer = () => combineReducers({
  movieDetail,
  movie: getMovie,
  YearFilter,
});
export default rootReducer;
