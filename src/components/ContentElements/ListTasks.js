import React from 'react';
import PropTypes from 'prop-types';
import TaskLi from './TaskLi';

const ListTasks = ({ tasks, HandleCheck, HandleDelete }) => (
  <ul id="display-list" className="row">
    {tasks.map((task) => (
      <TaskLi
        key={task.id}
        task={task}
        HandleCheck={HandleCheck}
        HandleDelete={HandleDelete}
      />
    ))}
  </ul>
);

ListTasks.propTypes = {
  HandleDelete: PropTypes.func.isRequired,
  HandleCheck: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ListTasks;
