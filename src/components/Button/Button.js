import React from 'react';
import './Button.scss';

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
      <div className="form__group">
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
          checked={checked}
          onChange={onChange}
          onClick={onClick}
        >
          {value}
        </button>
        {error && <div className="error invalid-feedback">{error}</div>}
      </div>
    );
  }
}
