import React from "react";
import { gonnaBeADataBase } from "../data/data";

const MentalCard = () => {
  const [showTheCard, setShowTheCard] = React.useState(0);
  const [currentCard, setCurrentCard] = React.useState(
    Math.floor(Math.random() * (gonnaBeADataBase.length - 1) + 1)
  );

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
    <div className="container">
      <div className="row align-items-start">
        <div className="col">
          <p></p>
        </div>
        <div className="col">
          <div className="card text-dark bg-light mb-3">
            <div className="card-header">MentalCard</div>
            <div className="card-body">
              <p
                onClick={() => setShowTheCard(showTheCard + 1)}
                className="card-title"
              >
                {showCard()}
              </p>
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

export default MentalCard;
