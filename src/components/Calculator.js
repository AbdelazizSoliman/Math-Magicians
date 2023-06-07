function Calculator() {
  return (
    <div className="calc">
      <input type="text" value="0" id="result" />
      <input type="button" value="AC" className="button light-gray" />
      <input type="button" value="+/-" className="button light-gray" />
      <input type="button" value="%" className="button light-gray" />
      <input type="button" value="/" className="button orange" />
      <input type="button" value="7" className="button light-gray" />
      <input type="button" value="8" className="button light-gray" />
      <input type="button" value="9" className="button light-gray" />
      <input type="button" value="x" className="button orange" />
      <input type="button" value="4" className="button light-gray" />
      <input type="button" value="5" className="button light-gray" />
      <input type="button" value="6" className="button light-gray" />
      <input type="button" value="-" className="button orange" />
      <input type="button" value="1" className="button light-gray" />
      <input type="button" value="2" className="button light-gray" />
      <input type="button" value="3" className="button light-gray" />
      <input type="button" value="+" className="button orange" />
      <input type="button" value="0" className="button light-gray zero" />
      <input type="button" value="." className="button light-gray" />
      <input type="button" value="=" className="button orange" />
    </div>
  );
}

export default Calculator;
