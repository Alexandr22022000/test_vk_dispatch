import {REQUEST_FRIENDS_LIST, SUCCESS_FRIENDS_LIST, ERROR_FRIENDS_LIST} from '../constans/actions';
import {FRIENDS_METHOD} from '../constans/request';
import request from '../scripts/request';

const requestFriendsList = () => ({
    type: REQUEST_FRIENDS_LIST
});

const successFriendsList = (data) => ({
    type: SUCCESS_FRIENDS_LIST,
    data
});

const errorFriendsList = (error) => ({
    type: ERROR_FRIENDS_LIST,
    error
});

const updateFriendsList = () => (dispatch, getState) => {
    const token = getState().login.token;

    dispatch(requestFriendsList());

    return request(FRIENDS_METHOD, {
        access_token: token,
        fields: 'online,photo_100',
        count: '500'
    }, (data) => {
        dispatch(successFriendsList(data));
    }, (error) => {
        dispatch(errorFriendsList(error));
    });
};

export default updateFriendsList;