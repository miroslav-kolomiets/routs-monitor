import {handleActions} from 'redux-actions';

const defaultState = {
  startDate: new Date (),
};

const reducer = handleActions (
  {
    START_DATE: (state, {payload}) => {
      return {
        ...state,
        startDate: payload,
      };
    },
  },
  defaultState
);

export default reducer;
