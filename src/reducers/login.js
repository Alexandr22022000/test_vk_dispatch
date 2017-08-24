import {SET_TOKEN} from '../constans/actions';

const defaultState = {
    token: '',
    allFunction: false
};

const login = (state = defaultState, action) => {
    switch (action.type) {
        case SET_TOKEN:
            return {token: action.token, allFunction: action.allFunction};

        default:
            return state;
    }
};

export default login;