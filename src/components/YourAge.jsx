import { useState } from 'react';

const YourAge = ({ onNext, setYourAgeProp }) => {
    const [yourAge, setYourAge] = useState('');

    const handleYourAge = (event) => {
        setYourAge(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(yourAge);
        setYourAgeProp(yourAge);
        onNext();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={yourAge}
                onChange={handleYourAge}
                style={{ width: '210px' }}
                required
            />
            <button type="submit" className="next-button">Next</button>
        </form>
    );
}

export default YourAge;
