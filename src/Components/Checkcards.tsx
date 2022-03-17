import React, { useEffect, useState } from "react";
import { gonnaBeADataBase } from "../data/data";

const Checkcards = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [userAnswer, setUserAnswer] = useState("bliblablou");
  const [trueOrFalse, setTrueOrFalse] = useState("");
  const [triggerUseEffect, setTriggerUseEffect] = useState(false);
  const [uech, setUech] = [""];
  const blblblblbl: string[] = []

  useEffect((): void => {
    if (userAnswer === gonnaBeADataBase[currentCard].goodanswer) {
      setTrueOrFalse("this is true");

      console.log("ayoooo")
    } else if (userAnswer === undefined) {
      setTrueOrFalse("this is not true");
      const setUech(() => blblblblbl.sort((a, b) => 0.5 - Math.random()));
    }
  }, [triggerUseEffect]);

  blblblblbl.push(
    gonnaBeADataBase[currentCard].goodanswer,
    gonnaBeADataBase[currentCard].answer2,
    gonnaBeADataBase[currentCard].answer3,
    gonnaBeADataBase[currentCard].answer4
  );

  return (
    <div>
      <p
        onClick={() =>
          setCurrentCard(Math.floor(Math.random() * (gonnaBeADataBase.length - 1) + 1))
        }
      >
        {gonnaBeADataBase[currentCard].question}
      </p>
      <form>
        <div>
          <input
            type="checkbox"
            value={uech[0]}
            onChange={() => setUserAnswer(uech[0])}
          />
          <label>{uech[0]}</label>
        </div>
        <div>
          <input
            type="checkbox"
            value={uech[1]}
            onChange={() => setUserAnswer(uech[1])}
          />
          <label>{uech[1]}</label>
        </div>
        <div>
          <input
            type="checkbox"
            value={uech[2]}
            onChange={() => setUserAnswer(uech[2])}
          />
          <label>{uech[2]}</label>
        </div>
        <div>
          <input
            type="checkbox"
            value={uech[3]}
            onChange={() => setUserAnswer(uech[3])}
          />
          <label>{uech[3]}</label>
        </div>
      </form>
      <button onClick={() => setTriggerUseEffect(!triggerUseEffect)}>
        Repondre
      </button>
      <p>{trueOrFalse}</p>
    </div>
  );
};

export default Checkcards;
