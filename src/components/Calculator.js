import React, { useState } from 'react';
import calculate from '../logic/calculate';
import DisplayResult from './DisplayResult';

function Calculator() {
  const [calculation, setCalculation] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleButtonClick = (buttonName) => {
    const updatedCalculation = calculate(calculation, buttonName);
    setCalculation(updatedCalculation);
  };

  return (
    <>
      <div className="calc">
        {/* <div><h2>Lets do some math!</h2></div> */}
        <DisplayResult result={calculation.next || calculation.total || '0'} operation={calculation.operation} />
        <input type="button" value="AC" className="button light-gray" onClick={() => handleButtonClick('AC')} />
        <input type="button" value="+/-" className="button light-gray" onClick={() => handleButtonClick('+/-')} />
        <input type="button" value="%" className="button light-gray" onClick={() => handleButtonClick('%')} />
        <input type="button" value="÷" className="button orange" onClick={() => handleButtonClick('÷')} />
        <input type="button" value="7" className="button light-gray" onClick={() => handleButtonClick('7')} />
        <input type="button" value="8" className="button light-gray" onClick={() => handleButtonClick('8')} />
        <input type="button" value="9" className="button light-gray" onClick={() => handleButtonClick('9')} />
        <input type="button" value="x" className="button orange" onClick={() => handleButtonClick('x')} />
        <input type="button" value="4" className="button light-gray" onClick={() => handleButtonClick('4')} />
        <input type="button" value="5" className="button light-gray" onClick={() => handleButtonClick('5')} />
        <input type="button" value="6" className="button light-gray" onClick={() => handleButtonClick('6')} />
        <input type="button" value="-" className="button orange" onClick={() => handleButtonClick('-')} />
        <input type="button" value="1" className="button light-gray" onClick={() => handleButtonClick('1')} />
        <input type="button" value="2" className="button light-gray" onClick={() => handleButtonClick('2')} />
        <input type="button" value="3" className="button light-gray" onClick={() => handleButtonClick('3')} />
        <input type="button" value="+" className="button orange" onClick={() => handleButtonClick('+')} />
        <input type="button" value="0" className="button light-gray zero" onClick={() => handleButtonClick('0')} />
        <input type="button" value="." className="button light-gray" onClick={() => handleButtonClick('.')} />
        <input type="button" value="=" className="button orange" onClick={() => handleButtonClick('=')} />
      </div>
    </>
  );
}

export default Calculator;
