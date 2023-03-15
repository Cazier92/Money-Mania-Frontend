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
      <div >
        <div className={styles.stats}>
          <h3 className={styles.profileh3}>Total Questions Seen</h3>
          <p>3</p>
        </div>
          <hr />
        <div className={styles.stats}>
          <h3 className={styles.profileh3}>Correct Answers</h3>
          <p>5</p>
        </div>
          <hr />
        <div className={styles.stats}>
          <h3 className={styles.profileh3}>Best Streak</h3>
          <p>2</p>
        </div>
          <hr />
        <div className={styles.stats}>
          <h3 className={styles.profileh3}>Favorite Category</h3>
          <p>Economics</p>
          <p>12 correct answers </p>
        </div>
          <hr />
        <div className={styles.stats}>
          <h3 className={styles.profileh3}>Least Favorite Category</h3>
          <p>Stock Market</p>
          <p>0 correct answers</p>
        </div>
      </div>
        
      }
    </>
  );
}

export default Profile;