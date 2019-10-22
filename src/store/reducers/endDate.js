import {handleActions} from 'redux-actions';

const defaultState = {
  endDate: new Date (),
};

const reducer = handleActions (
  {
    END_DATE: (state, {payload}) => {
      return {
        ...state,
        endDate: payload,
      };
    },
  },
  defaultState
);

export default reducer;
