import React from 'react';
import PropTypes from 'prop-types';

const ClearAllCompleted = ({ HandleClearCompleted }) => (
  <div id="clear-completed" className="row my-bg-gray">
    <button
      type="button"
      id="clear-completed-link"
      className="clear-completed-text"
      href=""
      onClick={HandleClearCompleted}
    >
      Clear all Completed
    </button>
  </div>
);

ClearAllCompleted.propTypes = {
  HandleClearCompleted: PropTypes.func.isRequired,
};

export default ClearAllCompleted;
