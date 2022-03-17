import React from 'react';
import './App.css';
import FormCard from './Formcards';
import MentalCard from './Mentalcard';

const App = () => {
const [whichCard, setWichCard] = React.useState(0)

function WhichMentalCard (){
  if (whichCard === 0) {
    return <MentalCard/>
  } else if (whichCard === 1){
    return <FormCard/>
  } else if (whichCard === 2) {
    return "Elle, c'est celle avec plein de boutons un peu comme moi à 15 ans"
  }
}

  return (
    <div className="App">
        <ul>
          <li onClick={() => setWichCard(0)}>MentalCard</li>
          <li onClick={() => setWichCard(1)}>MentalCard with form</li>
          <li onClick={() => setWichCard(2)}>QCM</li>
        </ul>
        <p>{WhichMentalCard()}</p>
    </div>
  );
}

export default App;
