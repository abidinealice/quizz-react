import Quizz from '../../components/Quizz/Quizz';
import questionsM from '../../data/questionsMaths.json';

function Maths() {
  const word = questionsM[0].questions[0];
  console.log(word);
  return (
    <div>
      <Quizz survey={word} />
    </div>
  );
}

export default Maths;
