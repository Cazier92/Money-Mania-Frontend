import { useState } from "react";

import QuestionCard from "../../components/QuestionCard/QuestionCard";
import AnswerCard from "../../components/AnswerCard/AnswerCard";

import './GamePage.css'

const GamePage = ({currentTrivia, updateData, handleUpdateProfile, user, setUpdated}) => {
  const [displayWin, setDisplayWin] = useState(false)
  const [correct, setCorrect] = useState(false)
  const [id, setId] = useState('')
  const fillerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  let answer

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
    } else {
      setCorrect(false)
      setDisplayWin(true)
      setId('incorrect')
    }
  }

  

  return ( 
    <div className="game-page-main">
      {displayWin ? 
      (<>
        {correct ? 
        (<div className="correct-ans-div">
          <h1>Good Job!</h1>
          <div>
            <QuestionCard currentTrivia={currentTrivia}/>
            <h5>Correct!</h5>
            <AnswerCard ans={answer} currentTrivia={currentTrivia} resp={'a'} handleClick={handleClick} id={id}/>
          </div>
        </div>) 
        : 
        (<div className="incorrect-ans-div">
          <h1>Oops... Try Again!</h1>
          <QuestionCard currentTrivia={currentTrivia}/>
          <h5>Correct Answer:</h5>
          <AnswerCard ans={answer} currentTrivia={currentTrivia} resp={'a'} handleClick={handleClick} id={id}/>
        </div>)}
      </>) 
      : (<>
    <h1>{currentTrivia.category?.toUpperCase()}</h1>
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
  );
}

export default GamePage;