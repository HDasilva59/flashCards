import React, { useEffect, useState } from "react";
import { gonnaBeADataBase } from "../data/data";

const FormCard = () => {
  const [response, setResponse] = useState(0);
  const [currentCard, setCurrentCard] = useState(0);
  const [userValue, setUserValue] = useState("Blablilbou");
  const [trueOrFalse, setTrueOrFalse] = useState("");

  useEffect((): void => {
    if (response === 1) {
      setTrueOrFalse("this is true");
    } else if (response === 2) {
      setTrueOrFalse("this is not true");
    }
  }, [response]);

  function isThatAGoodAnswer(answer: string) {
    if (
      answer.toLowerCase() ===
      gonnaBeADataBase[currentCard].goodanswer.toLowerCase()
    ) {
      setResponse(1);
      console.log("test ligne 15");
    } else {
      setResponse(2);
      console.log("test ligne 18");
    }
  }

  return (
    <div>
      <p
        onClick={() =>
          setCurrentCard(
            Math.floor(Math.random() * (gonnaBeADataBase.length - 1) + 1)
          )
        }
      >
        {gonnaBeADataBase[currentCard].question}
      </p>
      <form>
        <label>
          réponse :
          <input
            id="response"
            onChange={(event) => setUserValue(event.target.value)}
            type="text"
            name="name"
          />
        </label>
        <button type="button" onClick={() => isThatAGoodAnswer(userValue)}>
          Valider
        </button>
      </form>
      {trueOrFalse}
    </div>
  );
};

//prevent default

export default FormCard;
