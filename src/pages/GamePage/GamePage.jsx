import { useState } from "react";

import QuestionCard from "../../components/QuestionCard/QuestionCard";
import AnswerCard from "../../components/AnswerCard/AnswerCard";

import './GamePage.css'

const GamePage = ({currentTrivia}) => {
  const [displayWin, setDisplayWin] = useState(false)
  const [correct, setCorrect] = useState(false)

  const fillerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

  const handleClick = (resp) => {
    if (currentTrivia.ans === resp) {
      setCorrect(true)
      setDisplayWin(true)
    } else {
      setCorrect(false)
      setDisplayWin(true)
    }
  }

  return ( 
    <div className="game-page-main">
      {displayWin ? 
      (<>
        {correct ? 
        (<div>
          <h1>Correct!</h1>
        </div>) 
        : 
        (<div>
          <h1>Wrong Answer! Try Again Next Time!</h1>
        </div>)}
      </>) 
      : (<></>)}
    <QuestionCard currentTrivia={currentTrivia}/>
    {currentTrivia.a ? (<AnswerCard ans={currentTrivia.a} currentTrivia={currentTrivia} resp={'a'} handleClick={handleClick}/>) : 
      (<AnswerCard ans={fillerText} currentTrivia={currentTrivia} resp={'a'} handleClick={handleClick} />)}

    {currentTrivia.b ? (<AnswerCard ans={currentTrivia.b} currentTrivia={currentTrivia} resp={'b'} handleClick={handleClick}/>) : 
      (<><AnswerCard ans={fillerText} currentTrivia={currentTrivia} resp={'b'} handleClick={handleClick}/></>)}

    {currentTrivia.c ? (<AnswerCard ans={currentTrivia.c} currentTrivia={currentTrivia} resp={'c'} handleClick={handleClick}/>) : 
      (<><AnswerCard ans={fillerText} currentTrivia={currentTrivia} resp={'c'} handleClick={handleClick}/></>)}

    {currentTrivia.d ? (<AnswerCard ans={currentTrivia.d} currentTrivia={currentTrivia} resp={'d'} handleClick={handleClick}/>) : 
      (<><AnswerCard ans={fillerText} currentTrivia={currentTrivia} resp={'d'} handleClick={handleClick}/></>)}
    </div>
  );
}

export default GamePage;