import Login from '../components/Login';
import {connect} from 'react-redux';
import setToken from '../actions/setToken';

const mapDispatchToProps = (dispatch) => ({
    start () {
        dispatch(setToken('', false));
    },

    login (token, allFunction) {
        dispatch(setToken(token, allFunction));
    }
});

export default connect(null, mapDispatchToProps)(Login);