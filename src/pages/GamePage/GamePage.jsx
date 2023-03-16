import { useState } from "react";

import QuestionCard from "../../components/QuestionCard/QuestionCard";
import AnswerCard from "../../components/AnswerCard/AnswerCard";
import ClaimReward from "../../components/ClaimReward/ClaimReward";

import './GamePage.css'

const GamePage = ({currentTrivia, updateData, handleUpdateProfile, user, setUpdated, qNum, rewardClaimed, setRewardClaimed, handleChangeTrivia}) => {
  const [displayWin, setDisplayWin] = useState(false)
  const [correct, setCorrect] = useState(false)
  const [id, setId] = useState('')
  const [crack, setCrack] = useState(false)
  const fillerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  const fillerWhy ='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  let answer
  let q = qNum % 10

  if (currentTrivia.ans === 'a') {
    answer = currentTrivia.a
  } else if (currentTrivia.ans === 'b') {
    answer = currentTrivia.b
  } else if (currentTrivia.ans === 'c') {
    answer = currentTrivia.c
  } else if (currentTrivia.ans === 'd') {
    answer = currentTrivia.d
  }

  const handleClick = (resp) => {
    if (currentTrivia.ans === resp) {
      setCorrect(true)
      setDisplayWin(true)
      setId('correct')
      setUpdated(true)
      handleUpdateProfile(updateData, user.profile)
      setRewardClaimed(false)
    } else {
      setCorrect(false)
      setDisplayWin(true)
      setId('incorrect')
      setRewardClaimed(false)
    }
  }

  const handleNewQ = () => {
    handleChangeTrivia()
    setCorrect(false)
    setDisplayWin(false)
    setId('')
  }

  
  return ( 
    <>
    {q === 0 && rewardClaimed === false && crack === false ? (<>
    <div className="game-page-main">
      <div className="correct-ans-div">
        <h1>Good Job!</h1>
        <div className="correct-ans-div">
          <QuestionCard currentTrivia={currentTrivia}/>
          <h5 className="correctH">Correct!</h5>
          <AnswerCard ans={answer} currentTrivia={currentTrivia} resp={'a'} handleClick={handleClick} id={id}/>
          <p className="why"><strong>WHY?</strong> {fillerWhy}</p>
        </div>
        <button className="claim-reward-btn" onClick={() => setCrack(true)}>Claim Reward!</button>
      </div>
    </div>
    </>) 
    : q === 0 && rewardClaimed === false && crack ? (<>
      <ClaimReward setRewardClaimed={setRewardClaimed}/>
    </>)
    : (<>
      <div className="game-page-main">
        {displayWin ? 
        (<>
          {correct ? 
          (<div className="game-page-main">
            <h1>Good Job!</h1>
            <div className="correct-ans-div">
              <QuestionCard currentTrivia={currentTrivia}/>
              <h5 className="correctH">Correct!</h5>
              <AnswerCard ans={answer} currentTrivia={currentTrivia} resp={'a'} handleClick={handleClick} id={id}/>
              <p className="why"><strong>WHY?</strong> {fillerWhy}</p>
              <button className="next-q-btn" onClick={() => handleNewQ()}>Next Question</button>
            </div>
          </div>) 
          : 
          (<div className="game-page-main">
            <h1>Oops... Try Again!</h1>
            <div className="correct-ans-div">
              <QuestionCard currentTrivia={currentTrivia}/>
              <h5 className="correctH">Correct Answer:</h5>
              <AnswerCard ans={answer} currentTrivia={currentTrivia} resp={'a'} handleClick={handleClick} id={id}/>
              <p className="why"><strong>WHY?</strong> {fillerWhy}</p>
              <button className="next-q-btn" onClick={() => handleNewQ()}>Next Question</button>
            </div>
          </div>)}
        </>) 
        : (<>
      <h1>{currentTrivia.category?.toUpperCase()}</h1>
      <p>question {q}/10</p>
      <QuestionCard currentTrivia={currentTrivia}/>
      {currentTrivia.a ? (<AnswerCard ans={currentTrivia.a} currentTrivia={currentTrivia} resp={'a'} handleClick={handleClick} id={id}/>) : 
        (<AnswerCard ans={fillerText} currentTrivia={currentTrivia} resp={'a'} handleClick={handleClick} id={id}/>)}
  
      {currentTrivia.b ? (<AnswerCard ans={currentTrivia.b} currentTrivia={currentTrivia} resp={'b'} handleClick={handleClick} id={id}/>) : 
        (<><AnswerCard ans={fillerText} currentTrivia={currentTrivia} resp={'b'} handleClick={handleClick} id={id}/></>)}
  
      {currentTrivia.c ? (<AnswerCard ans={currentTrivia.c} currentTrivia={currentTrivia} resp={'c'} handleClick={handleClick} id={id}/>) : 
        (<><AnswerCard ans={fillerText} currentTrivia={currentTrivia} resp={'c'} handleClick={handleClick} id={id}/></>)}
  
      {currentTrivia.d ? (<AnswerCard ans={currentTrivia.d} currentTrivia={currentTrivia} resp={'d'} handleClick={handleClick} id={id}/>) : 
        (<><AnswerCard ans={fillerText} currentTrivia={currentTrivia} resp={'d'} handleClick={handleClick} id={id}/></>)}
        
        </>)}
      </div>
      
      </>)}
    </>
  );
}

export default GamePage;