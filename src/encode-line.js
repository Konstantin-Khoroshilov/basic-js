const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let current = 1;
  return str.split('').reduce((res, char, index, array) => {
    if (char === array[index - 1] && char === array[index + 1]) {
      current += 1;
    }
    if (char === array[index - 1] && char !== array[index + 1]) {
      current += 1;
      res += current + char;
      current = 1;
    }
    if (char !== array[index - 1] && char !== array[index + 1]) {
      res += char;
    }
    return res;
  }, '');
}

module.exports = {
  encodeLine
};
