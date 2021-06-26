import { SEARCH_MOVIE_DETAIL } from "../actions";

const initialState = {
  id: '',
  title: '',
  year: '',
  rate: '',
  type: '',
}
const movieDetail = (state =initialState,action) =>{
  switch (action.type) {
    case SEARCH_MOVIE_DETAIL: 
      return{
        ...state,id: action.movie.Title,year: action.movie.Year
      }
  
    default:
      break;
  }
}
export default movieDetail;