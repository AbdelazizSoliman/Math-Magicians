/* eslint-disable prefer-destructuring */
import { useState } from 'react';
import * as math from 'mathjs';
// import DisplayResult from './DisplayResult';

function Calculator() {
  const [result, setResult] = useState('');
  const clickHandler = (event) => {
    const value = event.target.value;
    if (value === 'x') {
      setResult(result.concat('*'));
    } else {
      setResult(result.concat(value));
    }
  };
  const clearDisplay = () => {
    setResult('');
  };
  const calculate = () => {
    try {
      const calculatedResult = math.evaluate(result);
      setResult(calculatedResult.toString());
    } catch (error) {
      setResult('Error');
    }
  };
  const toggleSign = () => {
    if (result !== '') {
      setResult((prevResult) => {
        const num = parseFloat(prevResult);
        return (-num).toString();
      });
    }
  };
  return (
    <div className="calc">
      <input type="text" placeholder="0" value={result} id="result" />
      <input type="button" value="AC" className="button light-gray" onClick={clearDisplay} />
      <input type="button" value="+/-" className="button light-gray" onClick={toggleSign} />
      <input type="button" value="%" className="button light-gray" onClick={clickHandler} />
      <input type="button" value="/" className="button orange" onClick={clickHandler} />
      <input type="button" value="7" className="button light-gray" onClick={clickHandler} />
      <input type="button" value="8" className="button light-gray" onClick={clickHandler} />
      <input type="button" value="9" className="button light-gray" onClick={clickHandler} />
      <input type="button" value="x" className="button orange" onClick={clickHandler} />
      <input type="button" value="4" className="button light-gray" onClick={clickHandler} />
      <input type="button" value="5" className="button light-gray" onClick={clickHandler} />
      <input type="button" value="6" className="button light-gray" onClick={clickHandler} />
      <input type="button" value="-" className="button orange" onClick={clickHandler} />
      <input type="button" value="1" className="button light-gray" onClick={clickHandler} />
      <input type="button" value="2" className="button light-gray" onClick={clickHandler} />
      <input type="button" value="3" className="button light-gray" onClick={clickHandler} />
      <input type="button" value="+" className="button orange" onClick={clickHandler} />
      <input type="button" value="0" className="button light-gray zero" onClick={clickHandler} />
      <input type="button" value="." className="button light-gray" onClick={clickHandler} />
      <input type="button" value="=" className="button orange" onClick={calculate} />
    </div>
  );
}

export default Calculator;
