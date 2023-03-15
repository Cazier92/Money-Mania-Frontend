import './QuestionCard.css'

const QuestionCard = ({currentTrivia}) => {


  return ( 
    <div className='question-card'>
      <h1>{currentTrivia.q}</h1>
    </div>
  );
}

export default QuestionCard;