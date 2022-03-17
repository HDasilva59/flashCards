import React from 'react';

const MentalCard = () => {
  const [showTheCard, setShowTheCard] = React.useState(0)
  const [currentCard, setCurrentCard] = React.useState(0)

  const gonnaBeADataBase = [{
    question: "what is the best youtube channel ?", answer: "fewlines-education"},{question : "Pourquoi?", answer: "Parceque"},{question: "Quelle est la réponse à la vie ?", answer: "Va lire H2G2"},{question : "Quelle est la couleur du cheval blanc de Henri IV ?", answer: "Bah blanc du coups."},{question:"what must go on?", answer: "SHOW MUST GO OOOOOOON"} ]

  function showCard(){
    if (showTheCard === 1){
      return gonnaBeADataBase[currentCard].answer
    } else if (showTheCard === 0) {
      return gonnaBeADataBase[currentCard].question
    } else {
      setCurrentCard(Math.floor(Math.random() * gonnaBeADataBase.length))
      setShowTheCard(0)
    }
  }

  return (
    <div className="App">
        <p onClick={() => setShowTheCard(showTheCard + 1)}>
        {showCard()}
        </p>
    </div>
  );
}

export default MentalCard;
