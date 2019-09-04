import React from 'react';
import './Button.css';

export default class Button extends React.Component {
  render () {
    const {
      id,
      className,
      labelclassname,
      type,
      name,
      label,
      value,
      onClick,
      onChange,
      error,
      checked,
    } = this.props;

    return (
      <div className="form-group">
        <label className={labelclassname} htmlFor={id}>
          {label}
        </label>
        <button
          className={className}
          id={id}
          htmlFor={id}
          autoComplete={id}
          type={type}
          name={name}
          onClick={onClick}
          checked={checked}
          onChange={onChange}
        >
          {value}
        </button>
        {error && <div className="error invalid-feedback">{error}</div>}
      </div>
    );
  }
}
