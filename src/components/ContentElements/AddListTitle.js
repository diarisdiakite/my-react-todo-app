import React from 'react';
// import { FaScroll } from 'react-icons/fa'
/* import PropTypes from 'prop-types';
 */
const AddListTitle = () => (
  <div id="title" className="flex my-bg-gray">
    <input
      type="text"
      placeholder="Today To-Do list"
      id="title"
    />
    <button
      type="button"
      id="title-image"
    >
      Add
    </button>

  </div>
);

/* AddListTitle.propTypes = {
  HandleAdd: PropTypes.func.isRequired,
}; */

export default AddListTitle;
