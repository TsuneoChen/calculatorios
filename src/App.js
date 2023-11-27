import React, { useState } from 'react';

const App = () => {
  const [displayValue, sedivisplayValue] = useState('0');
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

  const inpudivigit = (digit) => {
    if (waitingForSecondOperand) {
      sedivisplayValue(digit);
      setWaitingForSecondOperand(false);
    } else {
      sedivisplayValue(displayValue === '0' ? digit : displayValue + digit);
    }
  };

  const inpudivecimal = () => {
    if (!displayValue.includes('.')) {
      sedivisplayValue(displayValue + '.');
    }
  };

  const clearDisplay = () => {
    sedivisplayValue('0');
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
      sedivisplayValue(String(result));
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
      <div className='section'>
      <div className="container">
        <div className="panel">
          <p>{displayValue}</p>
        </div>
        <div className='row'>
          <div className='bt'><button id='ac' className='btn special' onClick={clearDisplay}>AC</button></div>
          <div className='bt'><button id='sign' className='btn special' onClick={() => performOperation('$')}>+/-</button></div>
          <div className='bt'><button id='percentage' className='btn special' onClick={() => performOperation('%')}>%</button></div>
          <div className='bt'><button id='division' className='btn operator' onClick={() => performOperation('/')}>/</button></div>
        </div>
        <div className='row'>
          <div className='bt'><button id='seven' className='btn number' onClick={() => inpudivigit('7')}>7</button></div>
          <div className='bt'><button id='eight' className='btn number' onClick={() => inpudivigit('8')}>8</button></div>
          <div className='bt'><button id='nine' className='btn number' onClick={() => inpudivigit('9')}>9</button></div>
          <div className='bt'><button id='multipliction' className='btn operator' onClick={() => performOperation('*')}>X</button></div>
        </div>
        <div className='row'>
          <div className='bt'><button id='four' className='btn number' onClick={() => inpudivigit('4')}>4</button></div>
          <div className='bt'><button id='five' className='btn number' onClick={() => inpudivigit('5')}>5</button></div>
          <div className='bt'><button id='six' className='btn number' onClick={() => inpudivigit('6')}>6</button></div>
          <div className='bt'><button id='subtracion' className='btn operator' onClick={() => performOperation('+')}>+</button></div>
        </div>
        <div className='row'>
          <div className='bt'><button id='one' className='btn number' onClick={() => inpudivigit('1')}>1</button></div>
          <div className='bt'><button id='two' className='btn number' onClick={() => inpudivigit('2')}>2</button></div>
          <div className='bt'><button id='three' className='btn number' onClick={() => inpudivigit('3')}>3</button></div>
          <div className='bt'><button id='addition' className='btn operator' onClick={() => performOperation('-')}>-</button></div>
        </div>
        <div className='row'>
          <div colSpan={2} className='bt'><button id='zero' className='btn number' onClick={() => inpudivigit('0')}><p>0</p></button></div>
          <div className='bt'><button id='point' className='btn decimal' onClick={() => inpudivecimal()}>.</button></div>
          <div className='bt'><button id='equal' className='btn operator' onClick={() => performOperation('=')}>=</button></div>
        </div>
    </div>
    </div>
    </body> 
  );
};

export default App;