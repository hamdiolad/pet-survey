import React, { useState } from 'react';
import NamePet from './components/NamePet';
import ColorPet from './components/ColorPet';
import YourName from './components/YourName'; // your name
import YourAge from './components/YourAge'; // your age
import PetsRadioButton from './components/PetsRadioButton' // 5 pets option radio button


export const App = () => {
  const [step, setStep] = useState(1)
  const [namePet, setNamePet] = useState('');
  const [color, setColor] = useState('');
  const [yourName, setYourName] = useState(''); // your name 
  const [yourAge, setYourAge] = useState(''); // your age
  const [selectedPet, setSelectedPet] = useState('') // fav pet

  const proceedToNextStep = () => {
    setStep(prevStep => prevStep + 1);
  };

  return (
    <div>
      {step === 1 && (
        <>
          <h3>what will be the name of this pet?</h3>
          <NamePet onNext={proceedToNextStep} setNamePetProp={setNamePet} />

        </>
      )}
      {step === 2 && (
        <>
          <ColorPet onNext={proceedToNextStep} setColorPetProp={setColor} />
        </>
      )}
      {step === 3 && (
        <div style={{
          backgroundColor: color,
          // color: getTextColor(color),
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <h3>your new pet</h3>
          <p>name: {namePet}</p>
          <p>color: {color}</p>
        </div>
      )}
    </div>
  );
  {
    step === 4 && ( //name

      <>
        <h4>What is you name?</h4>
        <YourName onNext={proceedToNextStep} setYourNameProp={setYourName} />

      </>
    )

  }

  {
    step === 5 && ( //age

      <>
        <h4>What is your age?</h4>
        <YourAge onNext={proceedToNextStep} setYourAgeProp={setYourAge} />

      </>
    )

  }
  {
    step === 6 && ( //radio button
      <div className="App">
        <h1>Choose your favorite animal as pet:</h1>
        <PetsRadioButton />
      </div>

    )
  }
}

export default App;


