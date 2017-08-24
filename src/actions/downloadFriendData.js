import {SUCCESS_FRIEND_DATA, REQUEST_FRIEND_DATA, ERROR_FRIEND_DATA} from '../constans/actions';
import {USER_METHOD} from '../constans/request';
import request from '../scripts/request';

const requestFriendData = () => ({
    type: REQUEST_FRIEND_DATA
});

const successFriendData = (data) => ({
    type: SUCCESS_FRIEND_DATA,
    data
});

const errorFriendData = (error) => ({
    type: ERROR_FRIEND_DATA,
    error
});

const downloadFriendData = (id) => (dispatch, getState) => {
    const token = getState().login.token;

    dispatch(requestFriendData());

    return request(USER_METHOD, {
        access_token: token,
        fields: 'online,photo_200',
        user_ids: id
    }, (data) => {
        dispatch(successFriendData(data));
    }, (error) => {
        dispatch(errorFriendData(error));
    });
};

export default downloadFriendData;