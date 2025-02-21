import Profile from '../../components/Profile/Profile';
import FriendList from '../../components/FriendList/FriendList'

import friends from "../../friends.json";
import userData from "../../userData.json";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
    </>
  );
};

export default App;

// import "./App.module.css";
// import Profile from "../Profile/Profile";
// import userDate from "../../userData.json";


// function App() {
//   <div className="css.container">
//   <Profile
//     username={userDate.username}
//     tag={userDate.tag}
//     location={userDate.location}
//     avatar={userDate.avatar}
//     stats={userDate.stats}
//   />
   
// </div>}
// export default App

