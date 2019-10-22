import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import {devToolsEnhancer} from 'redux-devtools-extension';

const store = createStore (
  rootReducer,
  compose (applyMiddleware (thunk), devToolsEnhancer ())
);

export default store;
