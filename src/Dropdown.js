import React, { useState } from 'react';
import './App.css';

const Dropdown = () => {
  const [list] = useState(["Pranam", "Sat Sri Akaal", "Khamma Ghani", "Vanakkam", "Ram Ram", "Radhe Radhe" , "Aadab"]);
  const [selectedOption, setSelectedOption] = useState("");
  const [optionArray, setOptionArray] = useState([]);

  const handleMouseOver = () => {
    setOptionArray(list);
  };

  const handleClick = () => {
    setOptionArray([]);
  };

  const handleOptionClick = (data) => {
    setSelectedOption(data);
  };

  return (
    <>
      <div onClick={handleClick} >
        <h1 className='heading'>Greetings in India</h1>
        <div>
          <h2>{selectedOption}</h2>
          <div onMouseOver={handleMouseOver} className="initialOption">
            Select
          </div>
          <div className="options">
            {optionArray.map((data) => (
              <div onClick={() => handleOptionClick(data)} className="singleOption" key={data}>
                {data}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dropdown;