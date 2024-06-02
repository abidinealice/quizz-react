import Quizz from '../../components/Quizz/Quizz';
import questionsM from '../../data/questionsMaths.json';

function Maths() {
  const questions = questionsM[0];
  //console.log(questions);
  return (
    <div>
      <Quizz survey={questions} total={questions.questions} />
    </div>
  );
}

export default Maths;
