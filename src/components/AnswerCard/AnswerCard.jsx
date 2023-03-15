import './AnswerCard.css'

const AnswerCard = ({ans, currentTrivia, resp, handleClick}) => {

  console.log(resp)
  
  return ( 
  <div className="answer-card" onClick={() => handleClick(resp)}>
    <p>{ans}</p>
  </div> );
}

export default AnswerCard;