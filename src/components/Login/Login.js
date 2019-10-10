import React from 'react';
import {useHistory} from 'react-router-dom';
import Button from '../Button/Button';
import Input from '../Input/Input';
import './Login.scss';

function Login () {
  let history = useHistory ();

  function handleSubmit (event) {
    event.preventDefault ();
    history.push ('/main');
  }

  return (
    <div className="login-page">
      <form className="login-form">
        <label className="from" htmlFor="from">
          <Input className="login-form__input" placeholder="Email" />
        </label>

        <label className="to" htmlFor="to">
          <Input className="login-form__input" placeholder="Password" />
        </label>
        <div className="login-form__row">
          <Button
            className="btn btn-primary"
            value="Login"
            onClick={handleSubmit}
          />
        </div>
      </form>
    </div>
  );
}

export default Login;
