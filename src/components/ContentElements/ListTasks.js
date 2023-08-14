import React from 'react'
import TaskLi from './TaskLi'

const ListTasks = ({ tasks, HandleCheck, HandleDelete}) => {
  return (
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
  )
}

export default ListTasks