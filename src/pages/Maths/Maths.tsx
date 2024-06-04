import PictureMaths from '../../components/Assets/PictureMaths';
import Quizz from '../../components/Quizz/Quizz';
import questionsM from '../../data/questionsMaths.json';

function Maths() {
  const questions = questionsM[0];
  //console.log(questions);
  return (
    <div>
      <Quizz survey={questions} total={questions.questions} picture={<PictureMaths />} />
    </div>
  );
}

export default Maths;
