export function generateResultText(calculationResult) {
    let resultText = '';

    if (calculationResult === 'invalid') {
        resultText = 'Invalid input. You must enter valid numbers.';
    } else if (calculationResult !== 'no-calc') {
        resultText = 'Result: ' + calculationResult;
    }

    if (calculationResult === undefined) {
        throw new Error('Must have a valid value to generate a result text.');
    }


    return resultText;
}

export function outputResult(resultText) {  
  const output = document.getElementById('result');  
  output.textContent = resultText;
}
