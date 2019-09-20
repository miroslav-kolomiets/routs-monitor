import React from 'react';
import Form from '../Form/Form';
import Logo from '../Logo/Logo';
import './Header.scss';

export default class Header extends React.Component {
  render () {
    return (
      <header className="header">
        <Logo />
        <div className="column">
          <Form handleSubmit={this.props.handleSubmit} />
        </div>
      </header>
    );
  }
}
