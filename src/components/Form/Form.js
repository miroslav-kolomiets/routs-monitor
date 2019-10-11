import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import {useDispatch, useSelector} from 'react-redux';
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

  function handleSubmit (event) {
    event.preventDefault ();

    const resultProductData = content.data.filter (a => {
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

    dispatch ({
      type: 'FETCH_DATA',
      data: resultProductData,
    });
    console.log (resultProductData);
  }

  return (
    <form className="form">
      <div className="form__row">
        <div className="form__group form__column">
          <label className="form-label" htmlFor="from">
            From:
          </label>
          <DatePicker
            selected={content.startDate}
            timeInputLabel="Time:"
            dateFormat="MM/dd/yyyy h:mm aa"
            showTimeInput
            peekNextMonth
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            maxDate={new Date ()}
            customInput={<Input className={'input-field'} />}
            onChange={date => setStartDate (date)}
          />
          <small id="dateHelp" className="form-text text-muted">
            YYYY-MM-DD HH:MM
          </small>
        </div>

        <div className="form__group form__column">
          <label className="form-label" htmlFor="to">
            To:
          </label>
          <DatePicker
            selected={content.endDate}
            timeInputLabel="Time:"
            dateFormat="MM/dd/yyyy h:mm aa"
            showTimeInput
            peekNextMonth
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            maxDate={new Date ()}
            customInput={<Input className={'input-field'} />}
            onChange={date => setEndDate (date)}
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
          onClick={handleSubmit}
        />
      </div>
    </form>
  );
}

export default Form;
