import React, { useState } from 'react';
import NamePet from './components/NamePet'; 
import ColorPet from './components/ColorPet';

export const App = () => {
  const [step, setStep] = useState(1)

  const proceedToNextStep = () => {
    setStep(prevStep => prevStep + 1);
  };

  return (
    <div>
      {step ===1 && (
      <>
      <h3>what will be the name of this pet?</h3>
      <NamePet onNext={proceedToNextStep} />
      </>
      )}
      {step === 2 && <ColorPet />}
    </div>
  );
}

export default App;
