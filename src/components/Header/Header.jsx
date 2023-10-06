import React from 'react';
import IconButton from 'components/IconButton/IconButton';
import {IoPersonAddSharp} from 'react-icons/io5';

const Header = ({ showModal }) => {
  return (
    <nav className="navbar bg-dark mb-3">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1 text-success"> Phonebook</span>      
        <IconButton onClick={showModal} area-label="Add contact">
          <IoPersonAddSharp/>
        </IconButton>
      </div>
    </nav>
  );
};

export default Header;
