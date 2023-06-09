/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

function DisplayResult({ result, operation }) {
  const displayValue = operation ? `${result} ${operation}` : result;

  return (
    <input type="text" placeholder="0" value={displayValue} id="result" />
  );
}

DisplayResult.propTypes = {
  result: PropTypes.string.isRequired,
  operation: PropTypes.string,
};

export default DisplayResult;
