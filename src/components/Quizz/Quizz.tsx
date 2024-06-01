import { useState } from 'react';

function Quizz({ survey }: { survey?: string }) {
  const [visible, setVisible] = useState(true);
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    if (counter === 0) {
      setVisible(true);
    }
  };

  if (visible === false) {
    return (
      <div className="containerQuizz">
        <div className="containerQuestions">
          <h1>{survey}</h1>
          <button onClick={handleClick}>Précédent</button>
          <button>Suivant</button>
        </div>
      </div>
    );
  } else if (visible === true) {
    return (
      <div className="containerQuizz">
        <div className="containerStart">
          <h1>Prêt pour le test ?</h1>
          <button className="btnStart" onClick={() => setVisible(false)}>
            Commencer
          </button>
        </div>
      </div>
    );
  } else if (counter === 5) {
    return (
      <div className="containerQuizz">
        <div className="containerEnd">
          <h1>Résultats</h1>
          <p>Voici vos résultats</p>
        </div>
      </div>
    );
  }
}

export default Quizz;
