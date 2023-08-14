import React from 'react'
//import { FaSearch } from 'react-icons/fa'

const Search = ({ search, setSearch}) => {
  return (
    <form id="form" className="flex" onSubmit={(e) => e.preventDefault}>
      <label htmlFor=""></label> 
      <input 
        type="text"
        placeholder='Search Task'
        value={search}
        onChange={(e) => setSearch(e.target.value)} 
      />
      
       
    </form>
  )
}

export default Search