import Callback from '../components/Callback';
import {connect} from 'react-redux';
import setToken from '../actions/setToken';

const mapDispatchToProps = {
    start: setToken
};

export default connect(null, mapDispatchToProps)(Callback);