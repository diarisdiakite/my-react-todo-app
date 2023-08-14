import React from 'react'
import { useState } from 'react'

const Header = ({ title, length }) => {
  const [name, setName] = useState('Didy')
  const HandleClick = () => {
    const names = ['Microverse', 'LWG', 'User'];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
  }
  return (
    <header>
      <h1 onClick={ HandleClick }>
        Hello {name}!
      </h1>
      <p>{`You've got ${length} ${length===1 ? 'task' : 'tasks'} in ${title}`}</p>
    </header>
  )
}

Header.defaultProps = {
  title: 'This is a default title'
}

export default Header