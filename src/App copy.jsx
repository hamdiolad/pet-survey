import { useState } from "react";
import { Name } from "./components/NamePet"


export const Name = () => {
  return <div>Your Component Logic</div>;
};


const ControlledFormExample = () => {
  const [name, setName] = useState('')

  const handleInputChange = (event) => {
    setName(event.target.value)
  }



return (
  <input type="text" value={name} onChange={handleInputChange} />
)

};