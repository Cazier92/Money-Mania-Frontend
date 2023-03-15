import './Leaderboard.css'
import { useState } from 'react'


const Leaderboard = () => {

  const [global, setGlobal] = useState(false);

  const globalFunctionClick = () =>{
    setGlobal(current => !current)
  }
  
  const friendsFunctionClick = () =>{
    setGlobal(current => !current)
  }

  const globalFunction = () =>{
    return <div className="leaderboardListContainer">
    </div>
  }
  
  const friendsFunction = () =>{
    return <div className="leaderboardListContainer">
      <h3>friends yeah</h3>
    </div>
  }




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
          <p className="stageText">Long name</p>
          <div className="firstStage">1st</div>
        </div>
        <div className="second">
          <img className="stageImage" src="https://imgur.com/OYCmlJW.jpg" alt="image" />
          <p className="stageText">name</p>
          <div className="secondStage">2nd</div>
        </div>
    </div>
    <button className="friendsBtn" onClick={friendsFunctionClick}>Friends</button>
    <button className="globalBtn" onClick={globalFunctionClick}>Global</button>
    <div>
    <section> {global?globalFunction():friendsFunction()}</section>
    </div>

    </div>
  );
}

export default Leaderboard;