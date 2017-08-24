import React from 'react';
import '../styles/FriendsListItem.css';

class FriendsListItem extends React.Component {
    render () {
        const {name, online, image} = this.props.data;
        return (
            <div className={this.createClassName()} onClick={this.createCallback()}>
                <img className="friends-list-item__image" src={image}/>
                <div className="friends-list-item__text">
                    <h2 className="friends-list-item__name">{name}</h2>
                    <p className="friends-list-item__online">{online ? 'Online' : 'Offline'}</p>
                </div>
            </div>
        );
    }

    createClassName () {
        let mainClassNames = 'friends-list-item';
        if (this.props.onClick === null) {
            return mainClassNames;
        }
        mainClassNames = mainClassNames + ' friends-list-item_selectable';
        return mainClassNames + (this.props.data.active ? ' friends-list-item_active' : '');
    }

    createCallback () {
        const onClick = this.props.onClick;
        if (onClick === null) {
            return () => {};
        }
        else {
            return () => onClick(this.props.data.id);
        }
    }
}

export default FriendsListItem;