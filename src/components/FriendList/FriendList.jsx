import PropTypes from "prop-types";
import { Item, List, Status, Name } from "./FriendList.styled";

export default function FriendList({ friends }) {
    
    const elements = friends.map(({ id, isOnline, avatar, name }) => (
        <Item className="item" key={id}>
            <Status className="status" isOnline={isOnline}></Status>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <Name className="name">{name}</Name>
        </Item>)); 
    
    return (
    <List className="friend-list">
       {elements}
    </List> 
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape(
        {
        id: PropTypes.number.isRequired,
        isOline: PropTypes.bool,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
        }
    ).isRequired
).isRequired
}
  
   