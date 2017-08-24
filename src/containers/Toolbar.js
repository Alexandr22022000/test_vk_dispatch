import Toolbar from '../components/Toolbar';
import {connect} from 'react-redux';
import updateFriendsList from '../actions/updateFriendsList';
import setToken from '../actions/setToken';

const mapStateToProps = (state) => ({
    status: state.status.requestStatus,
    mode: state.status.mode,
    allFunction: state.login.allFunction,
    token: state.login.token
});

const mapDispatchToProps = {
    update: updateFriendsList,
    setToken: setToken
};

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);