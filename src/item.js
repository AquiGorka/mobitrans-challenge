"use strict";

const utils = require('./utils.js');

module.exports = class Item {
    constructor(left, right, operand) {
      this.left = left;
      this.right = right;
      this.operand = operand;
    }
    render(origin) {
      let str = '';
      if (this.left.resolve()) {
        str += this.left.renderTip();
      }
      if (this.operand) {
        str += ' ' + this.operand;
      }
      if (this.right.resolve()) {
        str += ' ' + this.right.renderTip();
      }
      if (!origin) {
        str = '(' + str + ')';
      }
      return str;
    }
    renderPlain() {
      let str = '';
      if (this.left.resolve()) {
        str += this.left.renderPlain();
      }
      if (this.operand) {
        str += ' ' + this.operand;
      }
      if (this.right.resolve()) {
        str += ' ' + this.right.renderPlain();
      }
      return str;
    }
    renderSimple(origin) {
      let str = '';
      if (this.left.resolve()) {
        str += this.left.renderTip();
      }
      if (this.operand) {
        str += ' ' + this.operand;
      }
      if (this.right.resolve()) {
        str += ' ' + this.right.renderTip();
      }
      if (!origin) {
        str = '(' + str + ')';
      }
      return str;
    }
    renderTip(origin) {
      let str = '';
      if (this.left.resolve()) {
        str += this.left.renderTip();
      }
      if (this.operand) {
        str += ' ' + this.operand;
      }
      if (this.right.resolve()) {
        str += ' ' + this.right.renderTip();
      }
      if (!origin) {
        str = '(' + str + ')';
      }
      return str;
    }
    renderTree(spaces) {
      let str = spaces + '';
      if (this.operand) {
        str += this.operand + '\n';
      }
      if (this.left.resolve()) {
        str += this.left.renderTree(spaces + '  ') + '\n';
      }
      if (this.right.resolve()) {
        str += this.right.renderTree(spaces + '  ');
      }
      return str;
      //return spaces + this.operand + '\n' + this.left.renderTree(spaces + '  ') + '\n' + this.right.renderTree(spaces + '  ');
    }
    resolve() {
      return utils.evaluate(this.left.resolve(), this.right.resolve(), this.operand);
    }
};
