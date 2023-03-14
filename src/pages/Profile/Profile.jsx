import FriendCard from "../../components/FriendCard/FriendCard";
import styles from './Profile.module.css'
const Profile = () => {
  return ( 
    <>
      <div className={styles.profileHeader}>
        <p> ◀ </p>
        <p>Profile</p>
        <p> <i id='bt-icon' class='fa-solid fa-house'></i> </p>
      </div>
      <div className={styles.linkSection}>
        <p>
          <button className={styles.linkHeader}>
            Friends
          </button> 
        </p>
        <p > 
          <button className={styles.profilePic}>
            <i id="bt-icon" class="fa-solid fa-user "></i>
          </button> 
        </p>
        <p>
          <button className={styles.linkHeader}>
            Stats
          </button> 
        </p>
      </div>
      <hr />
      <FriendCard/>
    </>
  );
}

export default Profile;