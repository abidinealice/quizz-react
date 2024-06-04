import PictureFran from '../../components/Assets/PictureFran';
import Quizz from '../../components/Quizz/Quizz';
import questionsF from '../../data/questionsFrancais.json';

function Francais() {
  const questions = questionsF[0];
  //console.log(questions);
  return (
    <div>
      <Quizz survey={questions} total={questions.questions} picture={<PictureFran />} />
    </div>
  );
}

export default Francais;
