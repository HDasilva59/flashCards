import React from "react";
import { gonnaBeADataBase } from "../data/data";

const MentalCard = () => {
  const [showTheCard, setShowTheCard] = React.useState(0);
  const [currentCard, setCurrentCard] = React.useState(
    Math.floor(Math.random() * (gonnaBeADataBase.length - 1) + 1)
    //randomly give a first question
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
  //show the question then the response when the question or the response is clicked

  return (
    <div className="container">
      <div className="row align-items-start">
        <div className="col">
          <p></p>
        </div>
        <div className="col">
          <div className="card text-dark bg-light mb-3">
            <div className="card-header">MentalCards</div>
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
