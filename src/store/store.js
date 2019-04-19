// store.js

import { createStore, combineReducers, applyMiddleware } from 'redux';
import authReducer from '../reducers/authReducer';
import ReduxThunk from 'redux-thunk';
import newsReducer from '../reducers/newsReducer';

const rootReducer = combineReducers({
  auth : authReducer,
  news : newsReducer
});

const configureStore = () => {
  return createStore(rootReducer, {}, applyMiddleware(ReduxThunk));
}

export default configureStore;