import React from 'react'

const ClearAllCompleted = ({ clearCompleted, setClearCompleted, HandleClearCompleted }) => {
  return (
    <div id="clear-completed" className="row my-bg-gray">
      <a 
        id='clear-completed-link' 
        className='clear-completed-text'
        href='' 
        onClick={HandleClearCompleted}
      >
        Clear all Completed
      </a>
    </div>
  )
}

export default ClearAllCompleted