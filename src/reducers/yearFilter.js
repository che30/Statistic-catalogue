import { YEAR_FILTER } from "../actions";

export default YearFilter = (state='All',action) =>{
switch (action.type) {
  case YEAR_FILTER:
    return action.year
  default:
    return state;
}
}