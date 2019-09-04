import React from 'react';
import Form from '../Form/Form';
import Logo from '../Logo/Logo';
import './Header.css';

export default class Header extends React.Component {
  render () {
    return (
      <header className="header row">
        <Logo />
        <div class="column">
          <Form />
        </div>
      </header>
    );
  }
}
