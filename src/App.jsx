import React, { useState } from 'react';
import NamePet from './components/NamePet';
import ColorPet from './components/ColorPet';
import YourName from './components/YourName'; // your name
import YourAge from './components/YourAge'; // your age
import PetsRadioButton from './components/PetsRadioButton' // 5 pets option radio button


export const App = () => {
  const [step, setStep] = useState(1);
  const [namePet, setNamePet] = useState('');
  const [color, setColor] = useState('');
  const [yourName, setYourName] = useState(''); // your name 
  const [yourAge, setYourAge] = useState(''); // your age
  const [selectedPet, setSelectedPet] = useState(''); // fav pet

  const proceedToNextStep = () => {
    setStep(prevStep => prevStep + 1);
  };

  return (
    <div>
      {step === 1 && (
        <>
          <h4>What is your name?</h4>
          <YourName onNext={proceedToNextStep} setYourNameProp={setYourName} />
        </>
      )}

      {step === 2 && (
        <>
          <h4>What is your age?</h4>
          <YourAge onNext={proceedToNextStep} setYourAgeProp={setYourAge} />
        </>
      )}

      {step === 3 && (
        <div className="App">
          <h1>Choose your favorite animal as pet:</h1>
          <PetsRadioButton />
        </div>
      )}
    </div>
  );
}

export default App;

