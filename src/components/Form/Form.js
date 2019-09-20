import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import DatePicker from 'react-datepicker';
import Select from '../Select/Select';
import './Form.scss';
import 'react-datepicker/dist/react-datepicker.css';

const options = [
  {value: 'Last 30 minutes', label: 'Last 30 minutes'},
  {value: 'Today', label: 'Today'},
  {value: 'Yesterday', label: 'Yesterday'},
  {value: 'Last week', label: 'Last week'},
];

export default class Form extends React.Component {
  state = {
    startDate: new Date (),
    endDate: null,
  };

  setStartDate = date => {
    this.setState ({
      startDate: date,
    });
  };

  setEndDate = date => {
    this.setState ({
      endDate: date,
    });
  };

  render () {
    return (
      <form className="form">
        <div className="form__row">
          <div className="form__group form__column">
            <label className="from" htmlFor="from">
              From:
            </label>
            <DatePicker
              selected={this.state.startDate}
              timeInputLabel="Time:"
              dateFormat="MM/dd/yyyy h:mm aa"
              showTimeInput
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              customInput={<Input className={'input-field'} />}
              onChange={date => this.setStartDate (date)}
            />
            <small id="dateHelp" className="form-text text-muted">
              YYYY-MM-DD HH:MM
            </small>
          </div>

          <div className="form__group form__column">
            <label className="to" htmlFor="to">
              To:
            </label>
            <DatePicker
              selected={this.state.endDate}
              timeInputLabel="Time:"
              dateFormat="MM/dd/yyyy h:mm aa"
              showTimeInput
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              customInput={<Input className={'input-field'} />}
              onChange={date => this.setEndDate (date)}
            />
            <small id="dateHelp" className="form-text text-muted">
              YYYY-MM-DD HH:MM
            </small>
          </div>
        </div>
        <div className="form__row">
          <Select options={options} placeholder="Quick ranges" />
          <Button
            className="btn btn-primary"
            value="Update"
            onClick={this.props.handleSubmit}
          />
        </div>
      </form>
    );
  }
}
