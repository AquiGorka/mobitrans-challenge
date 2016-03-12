"use strict";

module.exports = class Interface {
    constructor(value) {
      this.value = parseInt(value);
    }
    renderPlain() {
        return this.value;
    }
    renderSimple() {
        return this.value;
    }
    renderTree(spaces) {
      return spaces + this.value;
    }
    renderTip() {
      return this.value;
    }
    resolve() {
      return this.value;
    }
};
