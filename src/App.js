import React, { useState } from 'react';

const App = () => {
  const [display, setDisplay] = useState('');
  const [memory, setMemory] = useState(0);

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setDisplay(evalExpression(display));
      } catch {
        setDisplay('Error');
      }
    } else if (value === 'C') {
      setDisplay('');
    } else if (value === 'MC') {
      setMemory(0);
    } else if (value === 'M+') {
      setMemory(memory + parseFloat(display));
    } else if (value === 'M-') {
      setMemory(memory - parseFloat(display));
    } else {
      setDisplay(display + value);
    }
  };

  const evalExpression = (expr) => {
    // Custom evaluation logic to avoid using eval
    // Simple parser can be implemented or use a library like math.js
    try {
      // eslint-disable-next-line no-new-func
      return Function(`"use strict"; return (${expr})`)();
    } catch (e) {
      return 'Error';
    }
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
        <button onClick={() => handleButtonClick('sqrt(')}>√</button>

        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
        <button onClick={() => handleButtonClick('^')}>^</button>

        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
        <button onClick={() => handleButtonClick('(')}>(</button>

        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
        <button onClick={() => handleButtonClick('=')}>=</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
        <button onClick={() => handleButtonClick(')')}>)</button>

        <button onClick={() => handleButtonClick('sin(')}>sin</button>
        <button onClick={() => handleButtonClick('cos(')}>cos</button>
        <button onClick={() => handleButtonClick('tan(')}>tan</button>
        <button onClick={() => handleButtonClick('C')}>C</button>
        <button onClick={() => handleButtonClick('MC')}>MC</button>
        <button onClick={() => handleButtonClick('M+')}>M+</button>
        <button onClick={() => handleButtonClick('M-')}>M-</button>
      </div>
    </div>
  );
};

export default App;
