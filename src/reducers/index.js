import { combineReducers } from 'redux';
import getMovie from './getMovie';
import YearFilter from './yearFilter';

const rootReducer = () => combineReducers({
  movie: getMovie,
  YearFilter,
});
export default rootReducer;
