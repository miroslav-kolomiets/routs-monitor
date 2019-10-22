import React from 'react';
import Form from '../Form/Form';
import Logo from '../Logo/Logo';
import './Header.scss';

function Header (props) {
  return (
    <header className="header">
      <Logo />
      <div className="column">
        <Form handleSubmit={props.handleSubmit} />
      </div>
    </header>
  );
}

export default Header;
