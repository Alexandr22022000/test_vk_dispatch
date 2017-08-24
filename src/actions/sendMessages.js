import {START_SENDING, MESSAGE_SENT, MESSAGE_GOTTEN, MESSAGE_ERROR} from '../constans/actions';
import {SEND_MESSAGE} from '../constans/request';
import request from '../scripts/request';

const startSending = (recipients) => ({
    type: START_SENDING,
    recipients
});

const messageSent = (id) => ({
    type: MESSAGE_SENT,
    id
});

const messageGotten = (id) => ({
    type: MESSAGE_GOTTEN,
    id
});

const messageError = (id) => ({
    type: MESSAGE_ERROR,
    id
});

class SendMessage {
    constructor (text, id, token, dispatch) {
        this.id = id;
        request(SEND_MESSAGE, {
            access_token: token,
            user_id: this.id,
            message: text
        }, () => {
            dispatch(messageGotten(this.id));
        }, () => {
            dispatch(messageError(this.id));
        });
        dispatch(messageSent(this.id));
    }
}

const sendMessages = (text) => (dispatch, getState) => {
    const friends = getState().friends, token = getState().login.token, recipients = [], requests = [];

    for (let key in friends) {
        if (friends[key].active) {
            let {name, image, id, online} = friends[key];
            recipients.push({name, image, id, online});
        }
    }

    dispatch(startSending(recipients));

    for (let key in recipients) {
        requests.push(new SendMessage(text, recipients[key].id, token, dispatch));
    }

    return requests;
};

export default sendMessages;