import React from 'react';
import '../styles/FriendData.css';
import {Link} from 'react-router-dom';

class FriendData extends React.Component {
    render () {
        const {hidden, image, name, online, id} = this.props.data;

        if (hidden) {
            return null;
        }

        return (
            <div className="friend-data">
                <table>
                    <tr>
                        <td className="friend-data__cell">
                            <img className="friend-data__image" src={image}/>
                            <Link className="friend-data__send-message" to="/friends/messages" onClick={() => this.props.sendMessage(id)}>Отпрваить сообщение</Link>
                        </td>
                        <td className="friend-data__cell-text">
                            <p className="friend-data__name">{name}</p>
                            <p className="friend-data__online">{online ? 'Online' : 'Offline'}</p>
                            <p className="friend-data__info">Сюда можно вывести различную информацию о пользователе</p>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }

    componentWillMount () {
        this.props.start();
    }
}

export default FriendData;