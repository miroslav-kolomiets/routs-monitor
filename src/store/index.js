import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer/index';
import {devToolsEnhancer} from 'redux-devtools-extension';

const store = createStore (
  reducer,
  compose (applyMiddleware (thunk), devToolsEnhancer ())
);

export default store;
