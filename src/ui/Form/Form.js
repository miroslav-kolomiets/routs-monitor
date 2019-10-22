import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import DatePicker from 'react-datepicker';
import Select from '../Select/Select';
import {connect} from 'react-redux';
import {
  startDateAction,
  endDateAction,
  fetchDataAction,
} from '../../store/actions/';
import {selectOptions, datepickerSettings} from './constants';
import fetchApi from '../../api/fetchData';
import './Form.scss';
import 'react-datepicker/dist/react-datepicker.css';

function Form (props) {
  function setStartDate (startDate) {
    props.startDate (startDate);
  }

  function setEndDate (endDate) {
    props.endDate (endDate);
  }

  function handleSubmit () {
    fetchApi (props);
  }

  return (
    <div className="form">
      <div className="form__row">
        <div className="form__group form__column">
          <label className="form-label" htmlFor="from">
            From:
          </label>
          <DatePicker
            selected={props.start.startDate}
            timeInputLabel={datepickerSettings.timeInputLabel}
            dateFormat={datepickerSettings.dateFormat}
            dropdownMode={datepickerSettings.dropdownMode}
            maxDate={datepickerSettings.maxDate}
            showTimeInput
            peekNextMonth
            showMonthDropdown
            showYearDropdown
            customInput={<Input className={'input-field'} />}
            onChange={date => setStartDate (date)}
          />
          <small id="dateHelp" className="form-text text-muted">
            {datepickerSettings.dateHelp}
          </small>
        </div>

        <div className="form__group form__column">
          <label className="form-label" htmlFor="to">
            To:
          </label>
          <DatePicker
            selected={props.end.endDate}
            timeInputLabel={datepickerSettings.timeInputLabel}
            dateFormat={datepickerSettings.dateFormat}
            dropdownMode={datepickerSettings.dropdownMode}
            maxDate={datepickerSettings.maxDate}
            showTimeInput
            peekNextMonth
            showMonthDropdown
            showYearDropdown
            customInput={<Input className={'input-field'} />}
            onChange={date => setEndDate (date)}
          />
          <small id="dateHelp" className="form-text text-muted">
            {datepickerSettings.dateHelp}
          </small>
        </div>
      </div>
      <div className="form__row">
        <Select options={selectOptions} placeholder="Quick ranges" />
        <Button
          className="btn btn-primary"
          value="Update"
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
}

const mapStateToProps = store => {
  return {
    data: store.fetchData,
    end: store.endDate,
    start: store.startDate,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchData: data => dispatch (fetchDataAction (data)),
  endDate: data => dispatch (endDateAction (data)),
  startDate: data => dispatch (startDateAction (data)),
});

export default connect (mapStateToProps, mapDispatchToProps) (Form);
