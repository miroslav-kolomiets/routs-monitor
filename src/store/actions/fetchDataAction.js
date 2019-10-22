import {createAction} from 'redux-actions';

const fetchDataAction = createAction ('FETCH_DATA');

fetchDataAction (data => data);

export default fetchDataAction;
