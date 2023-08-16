import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';

const TaskLi = ({ task, HandleCheck, HandleDelete }) => (
  <li className="task-card flex">
    <input
      className="checkbox"
      type="checkbox"
      checked={task.completed}
      onChange={() => HandleCheck(task.id)}
    />
    <label
      htmlFor="description"
      className="description"
      style={task.completed ? { textDecoration: 'line-through', fontStyle: 'italic' } : null}
    >
      { task.description }
    </label>
    {/*
              Add the UpdateTask here ???

            */}

    <FaTrashAlt
      role="button"
      tabIndex="0"
              // onMouseOver={<FaTrashAlt />}
      onClick={() => HandleDelete(task.id)}
      aria-label={`Delete ${task.task}`}
    />
  </li>
);

TaskLi.propTypes = {
  HandleDelete: PropTypes.func.isRequired,
  HandleCheck: PropTypes.func.isRequired,
  task: PropTypes.string.isRequired,
};

export default TaskLi;
