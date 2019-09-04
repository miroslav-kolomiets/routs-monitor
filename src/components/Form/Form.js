import React from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Select from '../Select/Select';
import './Form.css';

const options = [
  {value: 'Last 30 minutes', label: 'Last 30 minutes'},
  {value: 'Today', label: 'Today'},
  {value: 'Yesterday', label: 'Yesterday'},
  {value: 'Last week', label: 'Last week'},
];

export default class Form extends React.Component {
  render () {
    const {} = this.props;

    return (
      <form class="form">
        <div class="row">
          <Input
            className="form-control"
            type="datetime-local"
            id="date-from"
            aria-describedby="dateHelp"
            placeholder="2019-08-13 00:01"
            label="From:"
            labelClassName="form-label"
            name="firstName"
          />
          <Input
            className="form-control"
            type="datetime-local"
            id="date-from"
            aria-describedby="dateHelp"
            placeholder="2019-08-13 00:01"
            label="From:"
            labelClassName="form-label"
            name="firstName"
          />
        </div>
        <div class="row">
          <Select options={options} placeholder="Quick ranges" />
          <Button className="btn btn-primary" value="Update" />
        </div>
      </form>
    );
  }
}
