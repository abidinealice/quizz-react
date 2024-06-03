import { useState } from 'react';

type FileType = { id: string; questions: string[]; reponses: string[][]; resultats: string[] };

function Quizz({ survey, total }: { survey?: FileType; total: string[] }) {
  //IS CONTAINER VISIBLE OR NOT?
  const [visible, setVisible] = useState(true);

  //COUNTER QUESTION SURVEY
  const [counterQuestion, setCounterQuestion] = useState(-1);

  //COUNTER PAGINATION
  const [counterPage, setCounterPage] = useState(0);

  //COUNTER NUMBER QUESTION
  const [counterNumberQ, setCounterNumberQ] = useState(0);

  //COUNTER RESULTS SURVEY
  const [counterResults, setCounterResults] = useState(0);

  //SELECTED ANSWER
  const [selectedAnswer, setSelectedAnswer] = useState<any | null>(null);

  //BUTTON PREVIOUS
  const handleClickP = () => {
    if (counterPage === 1 || counterPage === 0) {
      //Show quizz presentation
      setVisible(true);
      setCounterPage(0);
      setCounterQuestion(counterQuestion - 1);
    } else {
      //Show previous question
      setCounterQuestion(counterQuestion - 1);
      setCounterPage(counterPage - 1);
      setSelectedAnswer(null);

      if (selectedAnswer === survey?.resultats[counterNumberQ]) {
        setCounterResults(counterResults);
      } else {
        setCounterResults(counterResults - 1);
      }
    }
  };

  //BUTTON NEXT
  const handleClickN = () => {
    if (counterPage === total.length) {
      //Show results
      setVisible(true);
      calculResults();
    } else if (counterPage < total.length) {
      setVisible(false);
      //Show next question
      calculResults();
      setCounterQuestion(counterQuestion + 1);
      setCounterPage(counterPage + 1);
    }
  };

  //BUTTON RETRY
  const handleClickRetry = () => {
    setCounterQuestion(-1);
    setCounterPage(0);
    setCounterResults(0);
  };

  //FUNCTION CALCUL RESULT

  const getAnswer = (ans: string) => {
    setSelectedAnswer(ans);
  };

  const calculResults = () => {
    if (selectedAnswer === survey?.resultats[counterNumberQ]) {
      setCounterResults(counterResults + 1);
      setCounterNumberQ(counterNumberQ + 1);
    }
  };

  //FUNCTION GIVE RESULT

  function giveResults() {
    if (counterResults === survey?.questions?.length || counterResults === 4) {
      return <p>Felicitations ! Vous avez obtenues {counterResults} bonnes réponses ! Continuez comme ça !</p>;
    } else if (counterResults === 3 || counterResults < 3) {
      if (counterResults < 0) {
        return <p>Attentions ! Vous avez obtenues 0 bonnes réponses ! Revoyez vos cours !</p>;
      }
      return <p>Attentions ! Vous avez obtenues {counterResults} bonnes réponses ! Revoyez vos cours !</p>;
    }
  }

  //CONTAINER QUESTION
  if (visible === false) {
    return (
      <div className="containerQuizz">
        <div className="containerQuestions">
          <h1>{survey?.questions[counterQuestion]}</h1>
          <div className="answersContainerQuestions">
            {survey?.reponses[counterQuestion].map((ans) => (
              <button key={ans.toString()} onClick={() => getAnswer(ans)}>
                {ans}
              </button>
            ))}
          </div>
          <div className="btnsContainerQuestions">
            <button onClick={handleClickP}>Précédent</button>
            <button onClick={handleClickN}>Suivant</button>
          </div>
        </div>
      </div>
    );
    //CONTAINER RESULTS
  } else if (visible === true) {
    if (counterPage === total.length) {
      return (
        <div className="containerQuizz">
          <div className="containerEnd">
            <h1>Résultats</h1>
            <p>Voici vos résultats</p>
            {giveResults()}
            <button onClick={handleClickRetry}>Recommencer ?</button>
          </div>
        </div>
      );
      //CONTAINER START SURVEY
    } else if (counterPage === 0) {
      return (
        <div className="containerQuizz">
          <div className="containerStart">
            <h1>Prêt pour le test de {survey?.id} ?</h1>
            <button className="btnStart" onClick={handleClickN}>
              Commencer
            </button>
          </div>
        </div>
      );
    }
  }
}

export default Quizz;
