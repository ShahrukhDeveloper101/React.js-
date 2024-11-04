import { useState } from "react";

function SearchInput({ inputValue, setInputValue, addItem }) {
    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    // const [inputValue, setInputValue] = useState('');

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            setInputValue('');
            addItem();
        }
    };


    return (
        <>
            <input
                type="text"
                className="form-control"
                placeholder="Enter item"
                value={inputValue}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
        </>
    );
}

export default SearchInput;
