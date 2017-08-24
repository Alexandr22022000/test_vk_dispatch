import React, {PropTypes} from 'react';
import '../styles/CreateMessage.css';
import {Link} from 'react-router-dom';

class CreateMessage extends React.Component {
    render () {
        return (
            <div className="create-message">
                <p className="create-message__recipients">{this.createRecipientsList()}</p>
                <textarea className="create-message__text" id="create-message__text">Ваше сообщение</textarea>
                <Link className="create-message__send" to="/sending" onClick={this.onClick.bind(this)}>Отправить</Link>
            </div>
        );
    }

    onClick (e) {
        e.preventDefault();
        this.props.sendMessages(document.getElementById('create-message__text').value);
        this.context.router.history.push('/sending');
    }

    componentWillMount () {
        this.props.start();
    }

    createRecipientsList () {
        let recipients = null, friends = this.props.recipients;

        for (let key in friends) {
            if (friends[key].active === true) {
                if (recipients === null) {
                    recipients = friends[key].name;
                }
                else {
                    recipients = recipients + ', ' + friends[key].name;
                }
            }
        }
        return recipients;
    }
}

CreateMessage.contextTypes = {
    router: PropTypes.object.isRequired
};

export default CreateMessage;