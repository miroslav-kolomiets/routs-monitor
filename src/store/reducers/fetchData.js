import {handleActions} from 'redux-actions';

const defaultState = {
  data: '',
};

const fetchData = handleActions (
  {
    FETCH_DATA: (state, {payload}) => {
      return {
        ...state,
        data: payload,
      };
    },
  },
  defaultState
);

export default fetchData;
