import './Leaderboard.css'

const Leaderboard = () => {
  return ( 
    <div className="leaderboardContainer">
    <h3 className="leaderboardTitle">Leaderboard</h3>
    <div className="leaderboardStage">
        <div className="third">
          <img className="stageImage" src="https://imgur.com/OYCmlJW.jpg" alt="image" />
          <p className="stageText" >name</p>
          <div className="thirdStage"></div>
        </div>
        <div className="first">
          <img className="stageImage" src="https://imgur.com/OYCmlJW.jpg" alt="image" />
          <p className="stageText">namethats</p>
          <div className="firstStage"></div>
        </div>
        <div className="second">
          <img className="stageImage" src="https://imgur.com/OYCmlJW.jpg" alt="image" />
          <p className="stageText">name</p>
          <div className="secondStage"></div>
        </div>
    </div>
    </div>
  );
}

export default Leaderboard;