import React, { useEffect, useState } from "react";

const FormCard = () => {
  const [response, setResponse] = useState(0);
  const [currentCard, setCurrentCard] = useState(0);
  const [userValue, setUserValue] = useState("Blablilbou")

  useEffect(()  => {
    if (response === 1){
      const renderTrueOrFalse = "this is true"
    } else if (response === 2){
      const renderTrueOrFalse = "this is not true"},[response]
  });

  const gonnaBeADataBase = [{
    question: "what is the best youtube channel ?", answer: "fewlines-education"},{question : "Pourquoi?", answer: "Parceque"},{question: "Quelle est la réponse à la vie ?", answer: "Va lire H2G2"},{question : "Quelle est la couleur du cheval blanc de Henri IV ?", answer: "Bah blanc du coups."},{question:"what must go on?", answer: "SHOW MUST GO OOOOOOON"} ]

  function isThatAGoodAnswer (answer:string) {
    if (answer.toLowerCase() === gonnaBeADataBase[currentCard].answer.toLowerCase()){
      setResponse(1)
      console.log("test ligne 15")
    } else {
      setResponse(2)
      console.log("test ligne 18")
    }
  }

  function renderTrueOrFalse (){
    if (response === 1){
      console.log("true")
      return "this is true"
    } else if (response === 2){
      console.log("not true")
      return "this is true barre"
    }
  }

  return (
    <div>
      <p onClick={() => setCurrentCard(Math.floor(Math.random() * gonnaBeADataBase.length))}>{gonnaBeADataBase[currentCard].question}</p>
      <form>
        <label>
          réponse :
          <input id="response" onChange={event => setUserValue(event.target.value)} type="text" name="name" />
        </label>
        <button type="button" onClick={() => isThatAGoodAnswer(userValue)}>Valider</button>
      </form>
      <p>{renderTrueOrFalse}</p>
    </div>
  );
};

export default FormCard;
