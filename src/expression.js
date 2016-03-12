"use strict";

const utils = require('./utils.js'),
  Item = require('./item.js'),
  ItemInterface = require('./interface.js');

const buildRight = (obj, o1) => {
  let right,
    amIaLeft;
  //
  if (utils.precedence(obj.o[obj.o.length - 1], o1)) {
      right = buildList({n: obj.n, o: obj.o});
    } else {
      right = new ItemInterface(obj.n.pop());
      if (obj.o.length) {
        amIaLeft = true;
      }
    }
  //
  return {
    right: right,
    amIaLeft: amIaLeft
  }
};

const buildList = (obj) => {
  let o1,
    left,
    right,
    item,
    amIaLeft = false,
    aux;
  //
  if (obj.left) {
    // operand
    o1 = obj.o.pop();
    // left
    left = obj.left;
    // right
    aux = buildRight(obj, o1);
    // item
    item = new Item(left, aux.right, o1);
    // finished? or am I somebody's left node?
    if (aux.amIaLeft && obj.o.length) {
      return buildList({left: item, n:obj.n, o:obj.o});
    }
    // return
    return item;
  } else {
    // operand
    o1 = obj.o.pop();
    // left
    left = new ItemInterface(obj.n.pop());
    // right
    aux = buildRight(obj, o1);
    // item
    item = new Item(left, aux.right, o1);
    // finished? or am I somebody's left node?
    if (aux.amIaLeft && obj.o.length) {
      return buildList({left: item, n:obj.n, o:obj.o});
    }
    // return
    return item;
  }
};

const generateList = (obj) => {
  let numbers = [],
    operands = [],
    level = obj.level,
    list = null;
  //
  while(level--) {
    numbers.push(utils.getRandomInt());
    if (level > 0) {
      operands.push(utils.getRandomOperator());
    }
  }
  //
  //console.log('starters', numbers, ', ', operands);
  list = buildList({n: numbers, o: operands});
  //
  return {
    list: list,
    numbers: numbers,
    operands: operands,
    render: () => {
      return list.render(true);
    },
    renderPlain: () => {
      return list.renderPlain();
    },
    renderSimple: () => {
      return list.renderSimple(true);
    },
    renderTip: () => {
      return list.renderTip(true);
    },
    renderTree: () => {
      return list.renderTree('');
    },
    resolve: () => {
      return list.resolve();
    }
  }
};

module.exports = (obj) => {
  return generateList(obj);
};
