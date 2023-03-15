import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


import PigFull from '../../pigImages/Pig Full.svg'
import Pig1 from '../../pigImages/Pig Crack 1.svg'
import Pig2 from '../../pigImages/Pig Crack 2.svg'
import Pig3 from '../../pigImages/Pig Crack 3.svg'
import Pig4 from '../../pigImages/Pig Crack 4.svg'
import Pig5 from '../../pigImages/Pig Crack 5.svg'



const ClaimReward = ({setRewardClaimed}) => {
  const [crackNum, setCrackNum] = useState(0)

  const navigate = useNavigate()

  const handleClick = () => {
    setRewardClaimed(true)
    navigate("/achievements")
  }


  return ( 
    <>
    <div>
      {crackNum === 0 ? (
        <>
          <img src={PigFull} alt="" onClick={() => setCrackNum(crackNum +1)}/>
          <p>Tap to Smash!</p>
        </>
      ) : crackNum === 1 ? (
        <>
          <img src={Pig1} alt="" onClick={() => setCrackNum(crackNum +1)}/>
          <p>Keep Going!</p>
        </>
      ) : crackNum === 2 ? (
        <>
          <img src={Pig2} alt="" onClick={() => setCrackNum(crackNum +1)}/>
          <p>Keep Going!</p>
        </>
      ) : crackNum === 3 ? (
        <>
          <img src={Pig3} alt="" onClick={() => setCrackNum(crackNum +1)}/>
          <p>Almost there!</p>
        </>
      ) : crackNum === 4 ? (
        <>
          <img src={Pig4} alt="" onClick={() => setCrackNum(crackNum +1)}/>
          <p>A little More!</p>
        </>
      ) : crackNum === 5 ? (
        <>
          <img src={Pig5} alt="" />
          <p>Your Reward:</p>
          <h1>Japanese Yen!</h1>
          <button onClick={() => handleClick()}>Add to Achievements</button>
        </>
      )
      : 
      (<></>) }
    </div>
    </>
  );
}

export default ClaimReward;