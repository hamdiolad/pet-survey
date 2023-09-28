import React from 'react'

const petOptions = [
  'Cat',
  'Dog',
  'Fish',
  'Bird',
  'Hamster'
]

export const PetsRadioButton = ({ selectedPet, setSelectedPet }) => {
  const handlePetSelection = (event) => {
    setSelectedPet(event.target.value)
  }
  
  return (
    <form className="pet-form" onSubmit={(event) => event.preventDefault()}>
      Choose your favorite animal as a pet:
      {petOptions.map((petOption) => (
        <label key={petOption} htmlFor="pet-radio">
          <input
            className="radio-btn"
            type="radio"
            value={petOption}
            onChange={handlePetSelection}
            checked={selectedPet === petOption} />
          {petOption}
        </label>
      ))}
    </form>
  )
}

export default PetsRadioButton;