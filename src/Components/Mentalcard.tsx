import React from "react";
import { gonnaBeADataBase } from "../data/data";

const MentalCard = () => {
  const [showTheCard, setShowTheCard] = React.useState(0);
  const [currentCard, setCurrentCard] = React.useState(0);


  function showCard() {
    if (showTheCard === 1) {
      return gonnaBeADataBase[currentCard].goodanswer;
    } else if (showTheCard === 0) {
      return gonnaBeADataBase[currentCard].question;
    } else {
      setCurrentCard(
        Math.floor(Math.random() * (gonnaBeADataBase.length - 1) + 1)
      );
      setShowTheCard(0);
    }
  }

  return (
    <div className="App">
      <p onClick={() => setShowTheCard(showTheCard + 1)}>{showCard()}</p>
    </div>
  );
};

export default MentalCard;
