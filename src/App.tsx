import React from "react";
import "./App.css";
import Checkcards from "./Components/Checkcards";
import FormCard from "./Components/Formcards";
import MentalCard from "./Components/Mentalcard";

const App = () => {
  const [whichCard, setWichCard] = React.useState(0);

  function WhichMentalCard() {
    if (whichCard === 0) {
      return <MentalCard />;
    } else if (whichCard === 1) {
      return <FormCard />;
    } else if (whichCard === 2) {
      return <Checkcards />;
    }
  }

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">Fabien OliFlashCards</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <li onClick={() => setWichCard(0)} className="nav-link">
                MentalCard
              </li>
              <li onClick={() => setWichCard(1)} className="nav-link">
                MentalCard with form
              </li>
              <li onClick={() => setWichCard(2)} className="nav-link">
                QCM
              </li>
            </div>
          </div>
        </div>
      </nav>
      <p>{WhichMentalCard()}</p>
    </div>
  );
};

export default App;
