import { YEAR_FILTER } from '../actions';

const YearFilter = (state = 'All', action) => {
  switch (action.type) {
    case YEAR_FILTER:
      if (action.year !== 'All') {
        return `${action.year.slice(0, 4)}-${(Number(action.year.slice(0, 4))
          + 2).toString()}`;
      }
      return 'All';

    default:
      return state;
  }
};
export default YearFilter;
