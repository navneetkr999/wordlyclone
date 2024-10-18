import React, { useRef, useState } from 'react'

const GameRow = () => {
    const [inputValues, setInputValues] = useState(Array(5).fill("")); // Initialize an array for 5 input fields
    const inputRefs = useRef([]);

    const onChangeHandler = (e, index) => {
        const value = e.target.value;
        if (value.length <= 1 && /^[a-zA-Z]*$/.test(value)) {
            // Copy the current state array
            const newValues = [...inputValues];
            // Update the specific index with the new value from the input
            newValues[index] = value;
            // Set the new state
            setInputValues(newValues);
            console.log(newValues.join(''));
            // Move to the next input if current input is filled
            if (value.length === 1 && index < inputRefs.current.length - 1) {
                inputRefs.current[index + 1].focus(); // Move focus to the next input
            }
        }

    }

    return (
        <>
            <div className="row">
                {inputValues.map((value, index) => (
                    <input
                        key={index}
                        ref={(el) => (inputRefs.current[index] = el)} // Assign ref to each input
                        className="row-letter"
                        type="text"
                        value={value}
                        onChange={(e) => onChangeHandler(e, index)} // Pass the event and index to the handler
                    />
                ))}
            </div>
        </>
    )
}

export default GameRow
