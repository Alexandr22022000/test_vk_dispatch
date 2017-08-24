import {REQUEST_FRIENDS_LIST, REQUEST_FRIEND_DATA, SUCCESS_FRIEND_DATA} from '../constans/actions';

const defaultState = {
    hidden: true,
    image: '',
    name: '',
    online: '',
    id: ''
};

const friendData = (state = defaultState, action) => {
    switch (action.type) {
        case SUCCESS_FRIEND_DATA:
            console.log(action);
            const friend = action.data[0];
            return {
                hidden: false,
                image: friend.photo_200,
                name: friend.first_name + ' ' + friend.last_name,
                online: friend.online,
                id: friend.id
            };

        case REQUEST_FRIENDS_LIST:
        case REQUEST_FRIEND_DATA:
            return defaultState;

        default:
            return state;
    }
};

export default friendData;