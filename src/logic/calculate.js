import * as math from 'mathjs';

function calculateExpression(expression) {
  try {
    const calculatedResult = math.evaluate(expression);
    return calculatedResult.toString();
  } catch (error) {
    return 'Error';
  }
}

export default calculateExpression;
