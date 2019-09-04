import React from 'react';
import './Input.css';

export default class Input extends React.Component {
  render () {
    const {
      id,
      className,
      labelClassName,
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
      <div className="form-group column">
        <label className={labelClassName} htmlFor={id}>
          {label}
        </label>
        <input
          className={className}
          id={id}
          htmlFor={id}
          autoComplete={id}
          type={type}
          name={name}
          value={value}
          onClick={onClick}
          checked={checked}
          onChange={onChange}
        />
        <small id="emailHelp" class="form-text text-muted">
          YYYY-MM-DD HH:MM
        </small>
        {error && <div className="error invalid-feedback">{error}</div>}
      </div>
    );
  }
}
