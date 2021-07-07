import { combineReducers } from 'redux';
import getMovie from './getMovie';
import YearFilter from './yearFilter';
import MovieDetailsReducer from './moviedetailReducer';

const rootReducer = () => combineReducers({
  movie: getMovie,
  YearFilter,
  moviedetail: MovieDetailsReducer,
});
export default rootReducer;
