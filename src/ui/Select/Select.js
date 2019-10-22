import React from 'react';
import './Select.scss';

function Select (props) {
  const {id, labelclassname, label, error} = props;

  return (
    <div className="form__group">
      <label className={labelclassname} htmlFor={id}>
        {label}
      </label>
      <select className="custom-select" id={id}>
        <option defaultValue>Quick ranges</option>
        <option value="1">Last 30 minutes</option>
        <option value="2">Yesterday</option>
        <option value="3">Last week</option>
      </select>
      {error && <div className="error invalid-feedback">{error}</div>}
    </div>
  );
}

export default Select;
