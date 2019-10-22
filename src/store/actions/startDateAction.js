import {createAction} from 'redux-actions';

const startDateAction = createAction ('START_DATE');

startDateAction (startDate => startDate);

export default startDateAction;
