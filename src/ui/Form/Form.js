import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import {useDispatch, useSelector} from 'react-redux';
import DatePicker from 'react-datepicker';
import Select from '../Select/Select';
import {selectOptions, datepickerSettings} from './constants';
import './Form.scss';
import 'react-datepicker/dist/react-datepicker.css';

function Form () {
  const content = useSelector (state => state);
  const dispatch = useDispatch ();

  function setStartDate (startDate) {
    dispatch ({
      type: 'START_DATE',
      startDate: startDate,
    });
  }

  function setEndDate (endDate) {
    dispatch ({
      type: 'END_DATE',
      endDate: endDate,
    });
  }

  // Function for demo
  function fakeServerFilterResponse (data) {
    const resultProductData = data.filter (a => {
      let hitDates = a.datesRange || {};
      hitDates = Object.keys (hitDates);
      hitDates = hitDates.map (function (date) {
        return new Date (date);
      });

      let hitDateMatches = hitDates.filter (function (date) {
        return date >= content.startDate && date <= content.endDate;
      });
      return hitDateMatches.length > 0;
    });

    if (resultProductData.length > 0) {
      return resultProductData;
    }
  }

  function handleSubmit (event) {
    event.preventDefault ();

    fetch (`./data.json`).then (res => res.json ()).then (data => {
      dispatch ({
        type: 'FETCH_DATA',
        data: fakeServerFilterResponse (data),
      });
    });
  }

  return (
    <div className="form">
      <div className="form__row">
        <div className="form__group form__column">
          <label className="form-label" htmlFor="from">
            From:
          </label>
          <DatePicker
            selected={content.startDate}
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
            selected={content.endDate}
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

export default Form;
