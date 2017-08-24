import React from 'react';
import '../styles/SendingMessages.css';
import FriendsList from './FriendsList';

class SendingMessages extends React.Component {
    render () {
        return (
            <table>
                <tr>
                    <td>
                        <div className="sending-messages__cell">
                            <h1 className="sending-messages__label">В очереди</h1>
                            <FriendsList friends={this.props.waiting} onClickItem={null}/>
                        </div>
                    </td>
                    <td>
                        <div className="sending-messages__cell">
                            <h1 className="sending-messages__label">Отправленно</h1>
                            <FriendsList friends={this.props.requests} onClickItem={null}/>
                        </div>
                    </td>
                    <td>
                        <div className="sending-messages__cell">
                            <h1 className="sending-messages__label">Полученно</h1>
                            <FriendsList friends={this.props.gotten} onClickItem={null}/>
                        </div>
                    </td>
                    <td>
                        <div className="sending-messages__cell">
                            <h1 className="sending-messages__label">Ошибка</h1>
                            <FriendsList friends={this.props.errors} onClickItem={null}/>
                        </div>
                    </td>
                </tr>
            </table>
        );
    }

    componentWillMount () {
        this.props.start();
    }
}

export default SendingMessages;