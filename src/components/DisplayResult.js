import React from 'react';
import PropTypes from 'prop-types';

function DisplayResult({ result }) {
  return (
    <input type="text" placeholder="0" value={result} id="result" />
  );
}

DisplayResult.propTypes = {
  result: PropTypes.string.isRequired,
};

export default DisplayResult;
