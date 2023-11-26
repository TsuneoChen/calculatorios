import React, { useState } from 'react';

const App = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

  const inputDigit = (digit) => {
    if (waitingForSecondOperand) {
      setDisplayValue(digit);
      setWaitingForSecondOperand(false);
    } else {
      setDisplayValue(displayValue === '0' ? digit : displayValue + digit);
    }
  };

  const inputDecimal = () => {
    if (!displayValue.includes('.')) {
      setDisplayValue(displayValue + '.');
    }
  };

  const clearDisplay = () => {
    setDisplayValue('0');
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };

  const performOperation = (nextOperator) => {
    const inputValue = parseFloat(displayValue);

    if (firstOperand === null) {
      setFirstOperand(inputValue);
    } else if (operator) {
      const result = calculate(firstOperand, inputValue, operator);
      setDisplayValue(String(result));
      setFirstOperand(result);
    }

    setWaitingForSecondOperand(true);
    setOperator(nextOperator);
  };

  const calculate = (firstOperand, secondOperand, operator) => {
    switch (operator) {
      case '+':
        return firstOperand + secondOperand;
      case '-':
        return firstOperand - secondOperand;
      case '*':
        return firstOperand * secondOperand;
      case '/':
        return firstOperand / secondOperand;
      case '$':
        return -firstOperand;
      case '%':
        return firstOperand/100;
      default:
        return secondOperand;
    }
  };

  return (
    <body>
      <section>
      <div className="container">

      {/*PANEL*/}
      <div className="panel"><p>{displayValue}</p></div>

      {/*BUTTON*/}
      <table>
        <tr>
          <td><button id='ac' className='btn special' onClick={clearDisplay}>AC</button></td>
          <td><button id='sign' className='btn special' onClick={() => performOperation('$')}>+/-</button></td>
          <td><button id='percentage' className='btn special' onClick={() => performOperation('%')}>%</button></td>
          <td><button id='division' className='btn operator' onClick={() => performOperation('/')}>/</button></td>
        </tr>
        <tr>
          <td><button id='seven' className='btn number' onClick={() => inputDigit('7')}>7</button></td>
          <td><button id='eight' className='btn number' onClick={() => inputDigit('8')}>8</button></td>
          <td><button id='nine' className='btn number' onClick={() => inputDigit('9')}>9</button></td>
          <td><button id='multipliction' className='btn operator' onClick={() => performOperation('*')}>X</button></td>
        </tr>
        <tr>
          <td><button id='four' className='btn number' onClick={() => inputDigit('4')}>4</button></td>
          <td><button id='five' className='btn number' onClick={() => inputDigit('5')}>5</button></td>
          <td><button id='six' className='btn number' onClick={() => inputDigit('6')}>6</button></td>
          <td><button id='subtracion' className='btn operator' onClick={() => performOperation('+')}>+</button></td>
        </tr>
        <tr>
          <td><button id='one' className='btn number' onClick={() => inputDigit('1')}>1</button></td>
          <td><button id='two' className='btn number' onClick={() => inputDigit('2')}>2</button></td>
          <td><button id='three' className='btn number' onClick={() => inputDigit('3')}>3</button></td>
          <td><button id='addition' className='btn operator' onClick={() => performOperation('-')}>-</button></td>
        </tr>
        <tr>
          <td colSpan={2}><button id='zero' className='btn number' onClick={() => inputDigit('0')}><p>0</p></button></td>
          <td><button id='point' className='btn decimal' onClick={() => inputDecimal()}>.</button></td>
          <td><button id='equal' className='btn operator' onClick={() => performOperation('=')}>=</button></td>
        </tr>
      </table>
    </div>
    </section>
    </body> 
  );
};

export default App;