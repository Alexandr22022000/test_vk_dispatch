import {REQUEST_FRIENDS_LIST, SUCCESS_FRIENDS_LIST, CHANGE_RECIPIENT} from '../constans/actions';

const defaultState = [];

const friends = (state = defaultState, action) => {
    switch (action.type) {
        case REQUEST_FRIENDS_LIST:
            return defaultState;

        case SUCCESS_FRIENDS_LIST:
            let friendsInRequest = action.data.items, friendsInState = [];

            for (let key in friendsInRequest) {
                let friend = friendsInRequest[key];
                friendsInState.push({
                    name: `${friend.first_name} ${friend.last_name}`,
                    image: friend.photo_100,
                    online: friend.online,
                    id: friend.id,
                    active: false
                });
            }

            return friendsInState;

        case CHANGE_RECIPIENT:
            let friends = state.slice();

            for (let key in friends) {
                if (friends[key].id === action.id) {
                    friends[key].active = !friends[key].active;
                    break;
                }
            }

            return friends;

        default:
            return state;
    }
};

export default friends;