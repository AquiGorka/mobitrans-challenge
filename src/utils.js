"use strict";

const MIN = 1,
  MAX = 100,
  OPERANDS = ['+', '*', '-'],
  PRECEDENCE = {
    '/': 4,
    '-': 3,
    '+': 2,
    '*': 1
  };

const getInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

module.exports = {
  evaluate: (val1, val2, operand) => {
      var res = val1;
      switch(operand) {
        case '+':
          res = val1 + val2;
          break;
        case '-':
          res = val1 - val2;
          break;
        case '*':
          res = val1 * val2;
          break;
        case '/':
          res = val1 / val2;
          break;
      }
      return res;
  },
  getRandomInt: () => {
    return getInt(MIN, MAX);
  },
  getRandomOperator: () => {
    return OPERANDS[getInt(0, OPERANDS.length - 1)];
  },
  precedence: (operand1, operand2) => {
    // exception
    if (operand1 === '*' && operand2 === '-') {
      return true;
    }
    //
    return PRECEDENCE[operand1] > PRECEDENCE[operand2];
  }
};
