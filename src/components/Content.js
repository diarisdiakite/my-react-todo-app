import React from 'react';
import PropTypes from 'prop-types';
import ListTasks from './ContentElements/ListTasks';
import AddTaskForm from './ContentElements/AddTaskForm';
import Search from './ContentElements/Search';
import ClearAllCompleted from './ContentElements/ClearAllCompleted';

const Content = ({
  tasks, HandleCheck, HandleDelete,
  HandleAdd, newTask, setNewTask,
  search, setSearch,
  clearCompleted, setClearCompleted, HandleClearCompleted,
}) => (
  <div className="main-container">
    <AddTaskForm
      newTask={newTask}
      setNewTask={setNewTask}
      HandleAdd={HandleAdd}
    />

    <Search
      search={search}
      setSearch={setSearch}
    />

    {tasks.length ? (
      <ListTasks
        tasks={tasks.filter((task) => (
          task.description.toLowerCase()).includes(search.toLowerCase()))}
        HandleCheck={HandleCheck}
        HandleDelete={HandleDelete}
      />
    ) : (
      <p className="empty-list"> the list is empty </p>
    )}

    <ClearAllCompleted
      clearCompleted={clearCompleted}
      setClearCompleted={setClearCompleted}
      HandleClearCompleted={HandleClearCompleted}
    />

  </div>
);

Content.propTypes = {
  HandleDelete: PropTypes.func.isRequired,
  HandleAdd: PropTypes.func.isRequired,
  clearCompleted: PropTypes.func.isRequired,
  setClearCompleted: PropTypes.func.isRequired,
  HandleClearCompleted: PropTypes.func.isRequired,
  newTask: PropTypes.string.isRequired,
  setNewTask: PropTypes.string.isRequired,
  HandleCheck: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
  setSearch: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Content;
