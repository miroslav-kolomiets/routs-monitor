import React from 'react';
import './Input.scss';

export default class Input extends React.Component {
  render () {
    const {
      id,
      className,
      type,
      name,
      placeholder,
      value,
      onClick,
      onChange,
      checked,
    } = this.props;

    return (
      <input
        className={className}
        id={id}
        placeholder={placeholder}
        htmlFor={id}
        autoComplete={id}
        type={type}
        name={name}
        value={value}
        onClick={onClick}
        checked={checked}
        onChange={onChange}
      />
    );
  }
}
