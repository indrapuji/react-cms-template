import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import favReducers from './reducers/favReducers';

const reducers = combineReducers({ favReducers });

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
