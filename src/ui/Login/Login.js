import React from 'react';
import {withRouter} from 'react-router-dom';
import Button from '../Button/Button';
import Input from '../Input/Input';
import './Login.scss';

function Login({history}) {
  function handleSubmit () {
    history.push ('/main');
  }

  return (
    <div className="login-page">
      <div className="login-form">
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
      </div>
    </div>
  );
}

const LoginWithRouter = withRouter (Login);

export default LoginWithRouter;
