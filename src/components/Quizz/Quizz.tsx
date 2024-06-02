import { useState } from 'react';

type FileType = { id: string; questions: string[]; reponses: string[][]; resultats: string[] };

function Quizz({ survey, total }: { survey?: FileType; total: string[] }) {
  //IS CONTAINER VISIBLE OR NOT?
  const [visible, setVisible] = useState(true);

  //COUNTER QUESTION SURVEY
  const [counterQuestion, setCounterQuestion] = useState(-1);

  //COUNTER PAGINATION
  const [counterPage, setCounterPage] = useState(0);

  //COUNTER ANSWER SURVEY
  const [counterAnswers, setCounterAnswers] = useState(0);

  //BUTTON PREVIOUS
  const handleClickP = () => {
    if (counterPage === 1 || counterPage === 0) {
      //Show quizz presentation
      setVisible(true);
      setCounterPage(0);
    } else {
      //Show previous question
      setCounterQuestion(counterQuestion - 1);
      setCounterPage(counterPage - 1);
    }
  };

  //BUTTON NEXT
  const handleClickN = () => {
    if (counterPage === total.length) {
      //Show results
      setVisible(true);
    } else if (counterPage < total.length) {
      setVisible(false);
      //Show next question
      setCounterQuestion(counterQuestion + 1);
      setCounterPage(counterPage + 1);
      calculResults();
    }
  };

  //BUTTON RETRY
  const handleClickRetry = () => {
    setCounterQuestion(-1);
    setCounterPage(0);
    setCounterAnswers(0);
  };

  //console.log(counterQuestion);
  //console.log(counterPage);

  //FUNCTION CALCUL RESULT
  function calculResults() {
    const radioButtons = document.getElementsByName('reponse');
    //console.log(radioButtons);

    let selectedValue;

    for (let i: number = 0; i < radioButtons.length; i++) {
      if (radioButtons[i].checked) {
        selectedValue = radioButtons[i].value;
        break;
      }
    }
    console.log(selectedValue);

    if (selectedValue === survey?.resultats[counterAnswers]) {
      setCounterAnswers(counterAnswers + 1);
      console.log(counterAnswers);
      console.log(counterQuestion);
      console.log(counterPage);
    }
    console.log(counterAnswers);
    console.log(counterQuestion);
    console.log(counterPage);
  }

  //FUNCTION GIVE RESULT

  function giveResults() {
    if (counterAnswers === survey?.questions?.length || counterAnswers === 4) {
      return <p>Felicitations ! Vous avez obtenues {counterAnswers} réponses ! Continuez comme ça !</p>;
    } else if (counterAnswers === 3 || counterAnswers < 3) {
      return <p>Attentions ! Vous avez obtenues {counterAnswers} réponses ! Revoyez vos cours !</p>;
    }
  }

  //CONTAINER QUESTION
  if (visible === false) {
    return (
      <div className="containerQuizz">
        <div className="containerQuestions">
          <h1>{survey?.questions[counterQuestion]}</h1>
          <div className="answersContainerQuestions">
            {survey?.reponses[counterQuestion].map((tags) => (
              <div key={tags.toString()}>
                <input type="radio" id={tags} name="reponse" value={tags} />
                <label htmlFor={tags}>{tags}</label>
              </div>
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
            <h1>Prêt pour le test ?</h1>
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
