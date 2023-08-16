import React from 'react';
// import { FaSearch } from 'react-icons/fa'
import PropTypes from 'prop-types';

const Search = ({ search, setSearch }) => (
  <form id="form" className="flex" onSubmit={(e) => e.preventDefault}>
    {/* <label htmlFor="" /> */}
    <input
      type="text"
      placeholder="Search Task"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />

  </form>
);

Search.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.string.isRequired,
};

export default Search;
