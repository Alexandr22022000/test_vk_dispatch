import {combineReducers} from 'redux';
import friends from './friends';
import friendData from './friendData';
import login from './login';
import status from './status';
import sendingMessages from './sendingMessages';

const mainReducer = combineReducers({
    friends,
    friendData,
    login,
    status,
    sendingMessages
});

export default mainReducer;