import Content from '../components/Content';
import {connect} from 'react-redux';
import changeRecipient from '../actions/changeRecipient';
import downloadFriendData from '../actions/downloadFriendData';

const mapStateToProps = (state) => ({
    friends: state.friends,
    mode: state.status.mode
});

const mapDispatchToProps = {
    onClickItemModeMessage: changeRecipient,
    onClickItemModeFriends: downloadFriendData
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);