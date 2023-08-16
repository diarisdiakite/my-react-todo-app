import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Header = ({ title, length }) => {
  const [name, setName] = useState('Didy');
  const HandleClick = () => {
    const names = ['Microverse', 'User'];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
  };
  return (
    <header>
      <textbox
        role="button"
        tabIndex={0}
        onClick={HandleClick}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === '') {
            HandleClick();
          }
        }}
      >
        Hello
        {' '}
        {name}
        !
      </textbox>
      <p>{`You've got ${length} ${length === 1 ? 'task' : 'tasks'} in ${title}`}</p>
    </header>
  );
};

Header.defaultProps = {
  title: 'This is a default title',
};

Header.propTypes = {
  title: PropTypes.string,
  length: PropTypes.number.isRequired,
};

export default Header;
