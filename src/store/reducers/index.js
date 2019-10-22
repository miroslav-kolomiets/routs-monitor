import {combineReducers} from 'redux';
import fetchData from './fetchData';
import startDate from './startDate';
import endDate from './endDate';

export const rootReducer = combineReducers ({
  fetchData,
  startDate,
  endDate,
});

export default rootReducer;
