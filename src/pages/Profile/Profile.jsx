import FriendCard from "../../components/FriendCard/FriendCard";
import './Profile.css'
import { useState } from "react";
const Profile = () => {

  const [view, setView] = useState("stats")

  function statView(){
    setView("stats")
  }
  function friendView(){
    setView("friend")
  }

  return ( 
    <div className="profileContainer">
      <div className="profileTitleContainer">
        <p>Profile</p>
      </div>
      <div className="addFriendIcon">
        <i id="bt-icon" className="fa-solid fa-user "></i>
      </div>
      <div className="profileFlex">
          <img className="profileImage" src="https://imgur.com/OYCmlJW.jpg" alt="" />
          <div className="profileFlex2">
            <p className="profileTitle" >name</p>
            <p className="profileText" >@name</p>
            <button className="editProBtn">Edit Profile</button>
          </div>
      </div>
      <div className="btnContainerProfile">
          <button className="friendsBtnProfile" onClick={friendView}>
            Friends
          </button> 
          <button className="statsBtnProfile" onClick={statView}>
            Stats
          </button> 
      </div>
      {view === "friend" && 
      <FriendCard/>
      }
      {view === "stats" && 
      <div className="statsProfileContainer" >
        <div className="statsProfile">
          <h3 className="statsTitle">Total Questions Seen</h3>
          <p className="statsText" >3</p>
        </div>
     
        <div className="statsProfile">
          <h3 className="statsTitle">Correct Answers</h3>
          <p className="statsText">5</p>
        </div>
    
        <div className="statsProfile">
          <h3 className="statsTitle">Best Streak</h3>
          <p className="statsText">2</p>
        </div>
       
        <div className="statsProfile">
          <h3 className="statsTitle">Favorite Category</h3>
          <p className="statsText">Economics</p>
          <p className="statsText">12 correct answers </p>
        </div>
          
        <div className="statsProfile">
          <h3 className="statsTitle">Least Favorite Category</h3>
          <p className="statsText">Stock Market</p>
          <p className="statsText">0 correct answers</p>
        </div>
      </div>
        
      }
    </div>
  );
}

export default Profile;