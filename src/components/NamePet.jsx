import { useState } from 'react';

const NamePet = ({ onNext }) => {
  const [namePet, setNamePet] = useState('');

  const handleNamePet = (event) => {
    setNamePet(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    console.log(namePet); 
    onNext();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={namePet} 
        onChange={handleNamePet}
        style={{ width : '210px'}} 
      />
      <button type="submit">Next</button>
    </form>
  );
}

export default NamePet;
