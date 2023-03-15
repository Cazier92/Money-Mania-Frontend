import AnswerCard from "../AnswerCard/AnswerCard";
const QuestionCard = ({currentTrivia}) => {
  return ( 
    <>
    <h1>This is QuestionCard Component</h1>
    <AnswerCard currentTrivia={currentTrivia}/>

    </>
  );
}

export default QuestionCard;