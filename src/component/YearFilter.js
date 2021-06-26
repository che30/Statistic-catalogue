/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

const YearFilter = ({ changeFilter }) => {
  const categories = ['2000-2002', '2003-2005',
    '2006-2008', '2009-2011', '2012-2014', '2016-2018', '2020-2021'];
  return (
    <div>
      <label>
        <select className="catFilter" onChange={(e) => { changeFilter(e.target.value); }}>
          {categories.map((cat) => (<option key={cat} value={cat}>{cat}</option>))}
        </select>
      </label>
    </div>

  );
};
YearFilter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};
export default YearFilter;
