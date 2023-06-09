import { useState } from 'react';
import calculateExpression from '../logic/calculate';
import toggleSign from '../logic/operate';
import DisplayResult from './DisplayResult';

function Calculator() {
  const [result, setResult] = useState('');
  function clearDisplay() {
    return '';
  }
  const clickHandler = ({ target: { value } }) => {
    if (value === 'x') {
      setResult(result.concat('*'));
    } else {
      setResult(result.concat(value));
    }
  };

  const calculate = () => {
    const calculatedResult = calculateExpression(result);
    setResult(calculatedResult);
  };

  const handleToggleSign = () => {
    const toggledResult = toggleSign(result);
    setResult(toggledResult);
  };

  const handleClearDisplay = () => {
    const clearedResult = clearDisplay();
    setResult(clearedResult);
  };
  return (
    <div className="calc">
      <DisplayResult result={result} />
      <input type="button" value="AC" className="button light-gray" onClick={handleClearDisplay} />
      <input type="button" value="+/-" className="button light-gray" onClick={handleToggleSign} />
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
