import React, { useEffect, useState } from "react";
import { gonnaBeADataBase } from "../data/data";

const FormCard = () => {
  const [response, setResponse] = useState(0);
  const [currentCard, setCurrentCard] = useState(
    Math.floor(Math.random() * (gonnaBeADataBase.length - 1) + 1));
    //randomly give a first question
  const [userValue, setUserValue] = useState("Blablilbou");
  const [trueOrFalse, setTrueOrFalse] = useState("");

  useEffect((): void => {
    if (response === 1) {
      setTrueOrFalse("this is true");
    } else if (response === 2) {
      setTrueOrFalse("this is not true");
    }
  }, [response]);
  //update the response each time the usergive a response

  function isThatAGoodAnswer(answer: string) {
    if (
      answer.toLowerCase() ===
      gonnaBeADataBase[currentCard].goodanswer.toLowerCase()
    ) {
      setResponse(1);
    } else {
      setResponse(2);
    }
  }
//Check if the answer the playergave is the good one, if it is, it set the reponse value to 1 else, it set the response value to 2
  return (
    <div className="container">
      <div className="row align-items-start">
        <div className="col">
          <p></p>
        </div>
        <div className="col">
          <div className="card text-dark bg-light mb-3">
            <div className="card-header">FormCards</div>
            <div className="card-body">
              <div>
                <p
                  className="card-title"
                  onClick={() =>
                    setCurrentCard(
                      Math.floor(
                        Math.random() * (gonnaBeADataBase.length - 1) + 1
                      )
                    )
                  }
                >
                  {gonnaBeADataBase[currentCard].question}
                </p>
              </div>
              <div className="card-text"></div>

              <form>
                <label>
                  Réponse :
                  <input
                    id="response"
                    onChange={(event) => setUserValue(event.target.value)}
                    type="text"
                    name="name"
                  />
                </label>
                <div>
                <br />
                <div>
                  <button type="button" onClick={() => isThatAGoodAnswer(userValue)}>
                    Valider
                  </button>
                </div>
                </div>
              </form>
              {trueOrFalse}
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

export default FormCard;
