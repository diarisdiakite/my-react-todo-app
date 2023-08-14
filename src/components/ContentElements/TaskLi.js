import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { FaCommentDots } from 'react-icons/fa'

const TaskLi = ({ task, HandleCheck, HandleDelete }) => {
  return (
    <li className='task-card flex' /*key={task.id}*/>
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
          {/*
            Add the UpdateTask here ???

          */}


          <FaTrashAlt 
            role='button'
            tabIndex='0'
            //onMouseOver={<FaTrashAlt />}
            onClick={() => HandleDelete(task.id)}
            aria-label={`Delete ${task.task}`}
          />
        </li>
  )
}

export default TaskLi