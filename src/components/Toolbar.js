import React from 'react';
import '../styles/Toolbar.css';
import {Link} from 'react-router-dom';
import {CREATE_MESSAGE, FRIENDS_LIST, SENDING_MESSAGE, WAIT, READY} from '../constans/modes';
import getTokenFromCookie from '../scripts/getTokenFromCookie';

class Toolbar extends React.Component {
    render () {
        return (
            <div>
                <div className="toolbar__line">
                    <Link className={this.selectActive(FRIENDS_LIST)} to="/friends/data">Список друзей</Link>
                    <Link className={this.selectActive(CREATE_MESSAGE)} to="/friends/messages">Написать сообщение</Link>
                    <Link className={this.selectActive(SENDING_MESSAGE)} to="/sending">Статус отправки сообщений</Link>
                    <p className="toolbar__function-status">{(this.props.allFunction ? 'Полный функционал' : 'Ограниченный функционал')}</p>

                    <Link className="toolbar__logout" to="/login">Выход</Link>
                    <p className="toolbar__update" onClick={this.props.update}>Обновить</p>
                    <p className="toolbar__status">{this.getStatus()}</p>
                </div>
                {this.props.children}
            </div>
        );
    }

    componentWillMount () {
        let cookie = document.cookie;

        if ((this.props.token === '') && (cookie.indexOf('token', 0) === -1)) {
            this.context.router.history.push('/login');
            return;
        }

        //this.context.router.history.push('/friends/data');

        if (this.props.token !== '') {
            this.props.update();
            return;
        }

        const {token, allFunction} = getTokenFromCookie(cookie);
        this.props.setToken(token, allFunction);
        this.props.update();
    }

    getStatus () {
        if ((this.props.status !== WAIT) && (this.props.status !== READY)) {
            if (this.props.status.error_code === 5) {
                this.context.router.history.push('/login');
            }
            return 'Ошибка!';
        }
        return this.props.status;
    }

    selectActive (mode) {
        if (this.props.mode === mode) {
            return 'toolbar__button toolbar__button_active';
        }
        else {
            return 'toolbar__button';
        }
    }
}

Toolbar.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default Toolbar;