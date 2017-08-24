import React from 'react';
import '../styles/Login.css';
import {Link} from 'react-router-dom';
import getTokenFromUrl from '../scripts/getTokenFromUrl';

class Login extends React.Component {
    render () {
        return (
            <div className="login">
                <a className="login__get-code" href={`https://oauth.vk.com/authorize?client_id=6105599&display=page&redirect_uri=${this.createCallbackUrl()}&scope=friends&response_type=token&v=5.6`}>Войти с ограниченным функционалом</a>
                <a className="login__get-code"  target="_blank" href="https://oauth.vk.com/authorize?client_id=6105599&display=page&redirect_uri=&scope=friends,messages&response_type=token&v=5.67">Получить код для отправки сообщений</a>
                <input className="login__input" id="login__input"/>
                <Link className="login__enter" to="/friends/data" onClick={this.onClick.bind(this)}>Вход</Link>
            </div>
        );
    }

    createCallbackUrl () {
        let url = window.location.href;
        url = url.substring(0, url.indexOf('login', 0));
        return url + 'callback/';
    }

    componentWillMount () {
        this.props.start();
    }

    onClick (e) {
        e.preventDefault();
        let code = document.getElementById('login__input').value;

        if (code.indexOf('access_token', 0) === -1) {
            this.props.login(code, true);
        }
        else {
            this.props.login(getTokenFromUrl(code), true);
        }

        this.context.router.history.push('/friends/data');
    }
}

Login.contextTypes = {
    router:  React.PropTypes.object.isRequired
};

export default Login;