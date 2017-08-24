import {REQUEST_FRIEND_DATA, REQUEST_FRIENDS_LIST, SUCCESS_FRIEND_DATA, SUCCESS_FRIENDS_LIST, ERROR_FRIEND_DATA, ERROR_FRIENDS_LIST, SET_MODE} from '../constans/actions';
import {FRIENDS_LIST, WAIT, READY} from '../constans/modes';

const defaultState = {
    mode: FRIENDS_LIST,
    requestStatus: READY
};

const status = (status = defaultState, action) => {
    switch (action.type) {
        case SET_MODE:
            return {...status, mode: action.mode};

        case SUCCESS_FRIENDS_LIST:
        case SUCCESS_FRIEND_DATA:
            return {...status, requestStatus: READY};

        case REQUEST_FRIENDS_LIST:
        case REQUEST_FRIEND_DATA:
            return {...status, requestStatus: WAIT};

        case ERROR_FRIENDS_LIST:
        case ERROR_FRIEND_DATA:
            return {...status, requestStatus: action.error};

        default:
            return status;
    }
};

export default status;