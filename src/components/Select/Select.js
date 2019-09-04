import React from 'react';
import './Select.css';

export default class Select extends React.Component {
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
        <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
          <option selected>Quick ranges</option>
          <option value="1">Last 30 minutes</option>
          <option value="2">Yesterday</option>
          <option value="3">Last week</option>
        </select>
        {error && <div className="error invalid-feedback">{error}</div>}
      </div>
    );
  }
}
