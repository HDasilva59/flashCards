import React, { useEffect, useState } from "react";
import { gonnaBeADataBase } from "../data/data";

const Checkcards = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [shuffledQuestions, setShuffledQuestions] = useState(["", "", "", ""]);
  const [userAnswer, setUserAnswer] = useState("");
  const [results, setResults] = useState("");

  useEffect(() => {
    shuffleResponses();
  }, [currentCard]);

  function changeQuestion() {
    setCurrentCard(
      Math.floor(Math.random() * (gonnaBeADataBase.length - 1) + 1)
    );
  }

  function shuffleResponses() {
    const bufferArray = [
      gonnaBeADataBase[currentCard].goodanswer,
      gonnaBeADataBase[currentCard].answer2,
      gonnaBeADataBase[currentCard].answer3,
      gonnaBeADataBase[currentCard].answer4,
    ];
    setShuffledQuestions(bufferArray.sort((a, b) => 0.5 - Math.random()));
  }

  function isThatAGoodAnswer() {
    if (userAnswer === gonnaBeADataBase[currentCard].goodanswer) {
      setResults("C'est gagné");
    } else {
      setResults("C'est perdu");
    }
  }

  return (
    <div className="container">
      <div className="row align-items-start">
        <div className="col">
          <p></p>
        </div>
        <div className="col">
          <div className="card text-dark bg-light mb-3">
            <div className="card-header">QCM</div>
            <div className="card-body">
            <div onClick={() => changeQuestion()} className="card-title">
              {gonnaBeADataBase[currentCard].question}
            </div>
              <div className="card-text">
                <input
                  type="checkbox"
                  id="check1"
                  name="check1"
                  onClick={() => setUserAnswer(shuffledQuestions[0])}
                />
                <label>{shuffledQuestions[0]}</label>
              </div>
              <div className="card-text">
                <input
                  type="checkbox"
                  id="check2"
                  name="check2"
                  onClick={() => setUserAnswer(shuffledQuestions[1])}
                />
                <label>{shuffledQuestions[1]}</label>
              </div>
              <div className="card-text">
                <input
                  type="checkbox"
                  id="check3"
                  name="check3"
                  onClick={() => setUserAnswer(shuffledQuestions[2])}
                />
                <label>{shuffledQuestions[2]}</label>
              </div>
              <div className="card-text">
                <input
                  type="checkbox"
                  id="check4"
                  name="check4"
                  onClick={() => setUserAnswer(shuffledQuestions[3])}
                />
                <label>{shuffledQuestions[3]}</label>
              </div>
              <div className="card-text">
                <button onClick={() => isThatAGoodAnswer()}>Submit</button>
              </div>
              <div>{results}</div>
            </div>
          </div>
        </div>
        <div className="col">
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Checkcards;
