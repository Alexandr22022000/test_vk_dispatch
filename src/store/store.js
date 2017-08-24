import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import mainReducer from '../reducers/main';

export default createStore(mainReducer, applyMiddleware(thunkMiddleware));