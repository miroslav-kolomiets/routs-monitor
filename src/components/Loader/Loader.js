import React from 'react';
import loader from '../Loader/loader.svg';
import './Loader.css';

class Loader extends React.Component {
  render () {
    return (
      <div className="loader-wrapper">
        <p className="loader-heading">
          No data for display, select another time range.
        </p>
        <img src={loader} alt="Loader" className="loader" />
      </div>
    );
  }
}

export default Loader;
