
import FriendListItem from "../FriendListItem/FriendListItem";
import css from './FriendList.module.css';


const FriendList = ({ friends }) => {
    return (
      <ul className={css.friendListist}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
    );
  };


  


//   FriendList.propTypes = {avatar: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   isOnline: PropTypes.bool.isRequired}

export default FriendList;