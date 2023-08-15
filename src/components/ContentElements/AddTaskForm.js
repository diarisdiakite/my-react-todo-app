import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { FaArrowCircleLeft } from 'react-icons/fa';

const AddTaskForm = ({ newTask, setNewTask, HandleAdd }) => {
  const inputRef = useRef();
  return (
    <form id="form" className="flex" onSubmit={HandleAdd}>
      <input
        /* autoFocus */
        ref={inputRef}
        id="descriptionInput"
        type="text"
        placeholder="Add your list..."
        required
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button
        id="addTask"
        type="submit"
        aria-label="Add Task"
        onClick={() => inputRef.current.focus()}
      >
        <FaArrowCircleLeft />
      </button>
    </form>
  );
};

AddTaskForm.propTypes = {
  HandleAdd: PropTypes.func.isRequired,
  newTask: PropTypes.string.isRequired,
  setNewTask: PropTypes.func.isRequired,
};

export default AddTaskForm;
