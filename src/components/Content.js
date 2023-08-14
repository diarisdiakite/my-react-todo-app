import React from 'react'
import ListTasks from './ContentElements/ListTasks'
import AddTaskForm from './ContentElements/AddTaskForm'
import UpdateTasks from './ContentElements/UpdateTasks'
import AddListTitle from './ContentElements/AddListTitle'
import Search from './ContentElements/Search'
import ClearAllCompleted from './ContentElements/ClearAllCompleted'

const Content = ({
  tasks, HandleCheck, HandleDelete, 
  HandleAdd, newTask, setNewTask, 
  search, setSearch, 
  clearCompleted, setClearCompleted, HandleClearCompleted}) => {
  
     
  return (
    <>

      <AddListTitle />

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
          tasks={tasks.filter((task)=>(task.description.toLowerCase()).includes(search.toLowerCase()))}
          HandleCheck={HandleCheck}
          HandleDelete={HandleDelete}
        />
      ) : (
        <p className='empty-list'> the list is empty </p>
      )}

      <ClearAllCompleted 
        clearCompleted={clearCompleted}
        setClearCompleted={setClearCompleted}
        HandleClearCompleted={HandleClearCompleted}
      />
      
    </>
  )
}

export default Content