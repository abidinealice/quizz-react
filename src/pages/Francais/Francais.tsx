import Quizz from '../../components/Quizz/Quizz';
import questionsF from '../../data/questionsFrancais.json';

function Francais() {
  const questions = questionsF[0];
  //console.log(questions);
  return (
    <div>
      <Quizz survey={questions} total={questions.questions} />
    </div>
  );
}

export default Francais;
