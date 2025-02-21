import PropTypes from 'prop-types';
import css from './Profile.module.css';


const Profile = ({ name, tag, location, image, stats }) => {
    return (
      <div className={css.profile}>
        <div className={css.content}>
          <img src={image} alt="User avatar" className={css.avatar} />
          <h2 className={css.name}>{name}</h2>
          <p className={css.tag}>@{tag}</p>
          <p className={css.location}>{location}</p>
        </div>
  
        <ul className={css.stats}>
          <li className={css.list}>
            <span>Followers</span>
            <span className={css.value}>{stats.followers}</span>
          </li>
          <li className={css.list}>
            <span>Views</span>
            <span className={css.value}>{stats.views}</span>
          </li>
          <li className={css.list}>
            <span>Likes</span>
            <span className={css.value}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    );
  };
  
  Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired
    }).isRequired
  };
  
  
  
  export default Profile;



