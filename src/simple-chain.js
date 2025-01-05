const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  _values: [],

  getLength() {
    return this._values.length;
  },
  addLink(value) {
    if (value !== undefined) {
      this._values.push(`( ${value} )`);
    } else {
      this._values.push(`(  )`);
    }
    return this;
  },
  removeLink(position) {
    if (position <= 0 || position > this._values.length || !Number.isInteger(position)) {
      this._values = [];
      throw new Error("You can't remove incorrect link!");
    } else {
      this._values.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this._values = this._values.reverse();
    return this;
  },
  finishChain() {
    const res = this._values.join('~~');
    this._values = [];
    return res;
  }
};

module.exports = {
  chainMaker
};
