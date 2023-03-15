import './Leaderboard.css'

const Leaderboard = () => {
  return ( 
    <div className="leaderboardContainer">
    <h3 className="leaderboardTitle">Leaderboard</h3>
    <div className="leaderboardStage">
        <div className="third">
          <img className="stageImage" src="https://imgur.com/OYCmlJW.jpg" alt="image" />
          <p className="stageText" >name</p>
          <div className="thirdStage">3rd</div>
        </div>
        <div className="first">
          <img className="stageImage" src="https://imgur.com/OYCmlJW.jpg" alt="image" />
          <p className="stageText">Christopher</p>
          <div className="firstStage">1st</div>
        </div>
        <div className="second">
          <img className="stageImage" src="https://imgur.com/OYCmlJW.jpg" alt="image" />
          <p className="stageText">name</p>
          <div className="secondStage">2nd</div>
        </div>
    </div>
    </div>
  );
}

export default Leaderboard;