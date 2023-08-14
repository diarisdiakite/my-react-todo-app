import React from 'react'
import { useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa'



const Content = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      description: 'Call Mamm',
      completed: true
    },
    {
      id: 2,
      description: 'Call Chadid',
      completed: false
    },
    {
      id: 3,
      description: 'Submit projects',
      completed: false
    }
  ]);

  const HandleCheck = (id) => {
    const listTasks = tasks.map((task) => task.id === id ? {...task, completed: !task.completed} : task);
    setTasks(listTasks);
    localStorage.setItem('tasks', JSON.stringify(listTasks));
  }

  const HandleDelete = (id) => {
    const listTasks = tasks.filter((task) => task.id !== id);
    setTasks(listTasks);
    localStorage.setItem('tasks', JSON.stringify(listTasks));
  }
  
  return (
    <main>
      <div id='title'>
        <h1>Today's To Do</h1>
        <button type="button" id="title-image"></button>
      </div>

      <div id="form" className="row">          
        <input id="descriptionInput" type="text" placeholder="Add your list..." required />
      </div>

      
      <ul id="display-list" className="row">
        {tasks.map(task => (
          <li className='task-card flex' key={task.id}>
            <input
              className='checkbox' 
              type="checkbox"
              checked={ task.completed }
              onChange={() => HandleCheck(task.id)} 
            />
            <label 
              htmlFor='' 
              className='description'
              style = {task.completed ? {textDecoration: 'line-through', fontStyle:'italic'} : null}
            >
              { task.description }
            </label>
            <FaTrashAlt 
              role='button'
              tabIndex='0'
              onClick={() => HandleDelete(task.id)}
            />
          </li>
        ))}
      </ul>



      <div id="clear-completed" className="row my-bg-gray">
        <a id="clear-completed-link" href=""><p id="clear-completed-text"></p></a>
      </div>
      
    </main>
  )
}

export default Content