import React from 'react';
import './App.css';
import Checkcards from './Components/Checkcards';
import FormCard from './Components/Formcards';
import MentalCard from './Components/Mentalcard';

const App = () => {
const [whichCard, setWichCard] = React.useState(0)

function WhichMentalCard (){
  if (whichCard === 0) {
    return <MentalCard/>
  } else if (whichCard === 1){
    return <FormCard/>
  } else if (whichCard === 2) {
    return <Checkcards/>
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
