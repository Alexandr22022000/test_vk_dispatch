import {START_SENDING, MESSAGE_SENT, MESSAGE_GOTTEN, MESSAGE_ERROR} from '../constans/actions';

const defaultState = {
    waiting: [],
    requests: [],
    gotten: [],
    errors: []
};

const migrateRecipient = (of, at, id) => {
    for (let key in of) {
        if (of[key].id === id) {
            let recipient = of[key];
            of.splice(key, 1);
            at.push(recipient);
            break;
        }
    }
};

const sendingMessages = (state = defaultState, action) => {
    switch (action.type) {
        case START_SENDING:
            return {
                waiting: action.recipients,
                requests: [],
                gotten: [],
                errors: []
            };

        case MESSAGE_SENT:
            let waiting = state.waiting.slice(), requests0 = state.requests.slice();
            migrateRecipient(waiting, requests0, action.id);
            return {...state, waiting, requests: requests0};

        case MESSAGE_GOTTEN:
            let requests1 = state.requests.slice(), gotten = state.gotten.slice();
            migrateRecipient(requests1, gotten, action.id);
            return {...state, gotten, requests: requests1};

        case MESSAGE_ERROR:
            let requests2 = state.requests.slice(), errors = state.errors.slice();
            migrateRecipient(requests2, errors, action.id);
            return {...state, errors, requests: requests2};

        default:
            return state;
    }
};

export default sendingMessages;