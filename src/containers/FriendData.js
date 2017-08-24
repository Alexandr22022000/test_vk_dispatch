import FriendData from '../components/FriendData';
import {connect} from 'react-redux';
import changeRecipient from '../actions/changeRecipient';
import setMode from '../actions/setMode';
import {FRIENDS_LIST} from '../constans/modes';

const mapStateToProps = (state) => ({
    data: state.friendData
});

const mapDispatchToProps = (dispatch) => ({
    sendMessage (id) {
        dispatch(changeRecipient(id));
    },

    start () {
        dispatch(setMode(FRIENDS_LIST));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(FriendData);