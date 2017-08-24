import React from 'react';
import '../styles/Content.css';
import FriendsList from './FriendsList';
import {FRIENDS_LIST} from '../constans/modes';
import CreateMessage from '../containers/CreateMessage';
import FriendData from '../containers/FriendData';
import {Route} from 'react-router-dom';

class Content extends React.Component {
    render () {
        return (
            <table>
                <tr className="content__table">
                    <td className="content__friends-list-container">
                        <FriendsList friends={this.createListData()} onClickItem={this.selectCallbackFunction()}/>
                    </td>
                    <td className="content__child-container">
                        <Route path="/friends/messages" component={CreateMessage}/>
                        <Route path="/friends/data" component={FriendData}/>
                    </td>
                </tr>
            </table>
        );
    }

    createListData () {
        const friends = this.props.friends;
        let data = [];

        for (let key in friends) {
            let {name, image, id, online, active} = friends[key];
            active = (this.props.mode === FRIENDS_LIST) ? false : active;
            data.push({name, image, online, id, active});
        }

        return data;
    }

    selectCallbackFunction () {
        if (this.props.mode === FRIENDS_LIST) {
            return this.props.onClickItemModeFriends;
        }
        else {
            return this.props.onClickItemModeMessage;
        }
    }
}

export default Content;