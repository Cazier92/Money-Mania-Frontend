import './AnswerCard.css'

const AnswerCard = ({ans, currentTrivia, resp, handleClick, id}) => {


  return ( 
  <div className="answer-card" id={id} onClick={() => handleClick(resp)}>
    <p>{ans}</p>
  </div> );
}

export default AnswerCard;