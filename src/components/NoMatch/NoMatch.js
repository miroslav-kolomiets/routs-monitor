import React from 'react';
import {useLocation} from 'react-router-dom';
import './NoMatch.scss';

function NoMatch () {
  let location = useLocation ();

  return (
    <div className="page-404">
      <p className="page-404__error">
        <span className="error">Error:</span>
        {' '}
        Page
        {' '}
        <span className="error-href">{location.pathname}</span>
        {' '}
        Not Found
      </p>
      <p className="page-404__message">
        We apologize for any inconvenience this may have caused.
      </p>
    </div>
  );
}

export default NoMatch;
