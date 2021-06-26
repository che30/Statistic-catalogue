import { combineReducers } from "redux";
import movieDetail from "./movieDetail";
import getMovie from "./searchMovie";
const rootReducer = () =>combineReducers({
  movieDetail,
  getMovie
})
export default rootReducer