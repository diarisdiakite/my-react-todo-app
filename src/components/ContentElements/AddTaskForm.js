import React from 'react'
import { FaArrowCircleLeft } from 'react-icons/fa'
import { useRef } from 'react'

const AddTaskForm = ({ newTask, setNewTask, HandleAdd }) => {
  const inputRef = useRef();
  return (
    <form id="form" className="flex" onSubmit={HandleAdd}>          
      <input
        autoFocus
        ref={inputRef} 
        id="descriptionInput" 
        type="text" 
        placeholder="Add your list..." 
        required 
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button
        id='addTask'
        type='submit'
        aria-label='Add Task'
        onClick={() => inputRef.current.focus()}
      >
        <FaArrowCircleLeft />
      </button>
    </form>
  )
}

export default AddTaskForm