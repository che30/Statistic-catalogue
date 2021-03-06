/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import '../assets/YearFilter.css';

const YearFilter = ({ changeFilter }) => {
  const categories = ['All', '2000-2002', '2003-2005',
    '2006-2008', '2009-2011', '2012-2014', '2016-2018', '2020-2021'];
  return (
    <div className="categories">
      <label>
        <select className="catFilter py-2 " onChange={(e) => { changeFilter(e.target.value); }}>
          {categories.map((cat) => (<option key={cat} value={cat}>{cat}</option>))}
        </select>
      </label>
    </div>

  );
};
YearFilter.defaultProps = {
  changeFilter() {},
};
YearFilter.propTypes = {
  changeFilter: PropTypes.func,
};
export default YearFilter;
