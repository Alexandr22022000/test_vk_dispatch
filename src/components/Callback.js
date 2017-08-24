import React from 'react';
import getTokenFromUrl from '../scripts/getTokenFromUrl';

class Callback extends React.Component {
    render () {
        return null;
    }

    componentWillMount () {
        let url = window.location.href;
        this.props.start(getTokenFromUrl(url), false);
        this.context.router.history.push('/friends/data');
    }
}

Callback.contextTypes = {
    router:  React.PropTypes.object.isRequired
};

export default Callback;