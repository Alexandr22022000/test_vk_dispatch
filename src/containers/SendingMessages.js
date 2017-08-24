import SendingMessages from '../components/SendingMessages';
import {connect} from 'react-redux';
import setMode from '../actions/setMode';
import {SENDING_MESSAGE} from '../constans/modes';

const mapStateToProps = (state) => ({
    waiting: state.sendingMessages.waiting,
    requests: state.sendingMessages.requests,
    gotten: state.sendingMessages.gotten,
    errors: state.sendingMessages.errors
});

const mapDispatchToProps = (dispatch) => ({
    start () {
        dispatch(setMode(SENDING_MESSAGE));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SendingMessages);