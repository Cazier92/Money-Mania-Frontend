import FriendCard from "../../components/FriendCard/FriendCard";
import styles from './Profile.module.css'
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
    <>
      <div className={styles.profileHeader}>
        <p> ◀ </p>
        <p>Profile</p>
        <p> <i id='bt-icon' class='fa-solid fa-house'></i> </p>
      </div>
      <div className={styles.linkSection}>
        <p>
          <button className={styles.linkHeader} onClick={friendView}>
            Friends
          </button> 
        </p>
        <p > 
          <button className={styles.profilePic} >
            <i id="bt-icon" class="fa-solid fa-user "></i>
          </button> 
        </p>
        <p>
          <button className={styles.linkHeader} onClick={statView}>
            Stats
          </button> 
        </p>
      </div>
      <hr />
      {view === "friend" && 
      <FriendCard/>
      }
      {view === "stats" && 
        <p>stats lol</p>
      }
    </>
  );
}

export default Profile;