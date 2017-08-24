import {CHANGE_RECIPIENT} from '../constans/actions';

const changeRecipient = (id) => ({
    type: CHANGE_RECIPIENT,
    id
});

export default changeRecipient;