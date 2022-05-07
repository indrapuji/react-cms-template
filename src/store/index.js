import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import sidebarReducers from './reducers/sidebarReducers';

const reducers = combineReducers({ sidebarReducers });

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
