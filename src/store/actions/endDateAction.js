import {createAction} from 'redux-actions';

const endDateAction = createAction ('END_DATE');

endDateAction (endDate => endDate);

export default endDateAction;
