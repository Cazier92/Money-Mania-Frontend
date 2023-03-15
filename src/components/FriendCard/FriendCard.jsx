import styles from './FriendCard.module.css'
const FriendCard = () => {
  return (  
    <main>
      <div className={styles.FriendCard}>
        <div>
          <img className={styles.pic} src="../guest.png" alt="pic" srcset=""/>
        </div>
        <div className={styles.friendDetails}>
          <p>Friend</p>
          <p>UK</p>
          <p>32/180 <i id='bt-icon' className="fa-solid fa-medal"></i></p>
        </div>
      </div>
      <div className={styles.FriendCard}>
        <div>
          <img className={styles.pic} src="../guest.png" alt="pic" srcset=""/>
        </div>
        <div className={styles.friendDetails}>
          <p>Friend</p>
          <p>United States</p>
          <p>19/180 <i id='bt-icon' className="fa-solid fa-medal"></i></p>
        </div>
      </div>
      <div className={styles.FriendCard}>
        <div>
          <img className={styles.pic} src="../guest.png" alt="pic" srcset=""/>
        </div>
        <div className={styles.friendDetails}>
          <p>Friend</p>
          <p>Mexico</p>
          <p>3/180 <i id='bt-icon' className="fa-solid fa-medal"></i></p>
        </div>
      </div>
      <div className={styles.FriendCard}>
        <div>
          <img className={styles.pic} src="../guest.png" alt="pic" srcset=""/>
        </div>
        <div className={styles.friendDetails}>
          <p>Friend</p>
          <p>India</p>
          <p>89/180 <i id='bt-icon' className="fa-solid fa-medal"></i></p>
        </div>
      </div>
      <div className={styles.FriendCard}>
        <div>
          <img className={styles.pic} src="../guest.png" alt="pic" srcset=""/>
        </div>
        <div className={styles.friendDetails}>
          <p>Friend</p>
          <p>Canada</p>
          <p>23/180 <i id='bt-icon' className="fa-solid fa-medal"></i></p>
        </div>
      </div>
    </main>
  );
}

export default FriendCard;