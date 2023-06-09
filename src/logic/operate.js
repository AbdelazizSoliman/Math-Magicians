function toggleSign(result) {
  if (result !== '') {
    const num = parseFloat(result);
    return (-num).toString();
  }
  return result;
}

export default toggleSign;
