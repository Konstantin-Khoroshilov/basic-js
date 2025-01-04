const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let res = 0;
  const getCharactersCount = (string) => {
    return string.split('').reduce((res, char) => {
      res[char] ? res[char] += 1 : res[char] = 1;
      return res;
    }, {});
  }
  const str1CharactersCount = getCharactersCount(s1);
  const str2CharactersCount = getCharactersCount(s2);
  Object.keys(str1CharactersCount).forEach(character => {
    if (str2CharactersCount[character]) {
      res += Math.min(str1CharactersCount[character], str2CharactersCount[character]);
    }
  });
  return res;
}

module.exports = {
  getCommonCharacterCount
};
