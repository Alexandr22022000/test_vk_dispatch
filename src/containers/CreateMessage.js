import CreateMessage from '../components/CreateMessage';
import {connect} from 'react-redux';
import setMode from '../actions/setMode';
import sendMessages from '../actions/sendMessages';
import {CREATE_MESSAGE} from '../constans/modes';

const mapStateToProps = (state) => ({
    recipients: state.friends
});

const mapDispatchToProps = (dispatch) => ({
    start () {
        dispatch(setMode(CREATE_MESSAGE));
    },

    sendMessages (text) {
        dispatch(sendMessages(text));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateMessage);