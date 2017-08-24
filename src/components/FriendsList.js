import React from 'react';
import '../styles/FriendsList.css';
import FriendsListItem from './FriendsListItem';

class FriendsList extends React.Component {
    render () {
        return (
            <div className="friends-list">
                {this.createList()}
            </div>
        );
    }

    createList () {
        const friends = this.props.friends;
        let list = [];

        for (let key in friends) {
            list.push(<FriendsListItem data={friends[key]} onClick={this.props.onClickItem}/>);
        }

        return list;
    }
}

export default FriendsList;