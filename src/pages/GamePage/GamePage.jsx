import QuestionCard from "../../components/QuestionCard/QuestionCard";

const GamePage = ({currentTrivia}) => {
  return ( 
    <>
    <h1>this is gamePage page</h1>
    <QuestionCard currentTrivia={currentTrivia}/>
    </>
  );
}

export default GamePage;