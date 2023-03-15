import './Leaderboard.css'

const Leaderboard = () => {
  return ( 
    <div className="leaderboardContainer">
    <h3>Leaderboard</h3>
    <div className="leaderboardStage">
        <div className="third">
          <image className="stageImage">
          </image>
          <p>name</p>
          <div className="thirdStage"></div>
        </div>
        <div className="first">
          <image  className="stageImage">
          </image>
          <p>name</p>
          <div className="firstStage"></div>
        </div>
        <div className="second">
          <image className="stageImage">
          </image>
          <p>name</p>
          <div className="secondStage"></div>
        </div>
    </div>
    </div>
  );
}

export default Leaderboard;