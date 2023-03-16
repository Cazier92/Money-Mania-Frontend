import './FriendCard.css'

const FriendCard = () => {
  return (  
  <div className="leaderListSection">
    <div className="leaderboardListContainer">
      <img className="stageImage" src="https://imgur.com/OYCmlJW.jpg" alt="" />
      <p className="nameText">Friends name</p>
      <p className="orderText"> 32/180</p>
    </div>
    <div className="leaderboardListContainer">
      <img className="stageImage" src="https://imgur.com/OYCmlJW.jpg" alt="" />
      <p className="nameText">Best friends name</p>
      <p className="orderText"> 32/180</p>
    </div>
  </div>
  );
}

export default FriendCard;