const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const string = str + '';
  const separator = options.separator != undefined ? options.separator : '+';
  const addition = options.addition === undefined ? '' : options.addition === null ? 'null' : options.addition + '';
  const additionSeparator = options.additionSeparator != undefined ? options.additionSeparator : '|';
  const repeatTimes = options.repeatTimes != undefined ? options.repeatTimes : 1;
  const additionRepeatTimes = options.additionRepeatTimes != undefined ? options.additionRepeatTimes : 1;
  const getFullString = (string, separator, repeatTimes, addition = '') => {
    let result = '';
    for (let i = 1; i <= repeatTimes; i++) {
      if (i === repeatTimes) {
        result += string + addition;
      } else {
        result += string + addition + separator;
      }
    }
    return result;
  }
  return getFullString(string, separator, repeatTimes, getFullString(addition, additionSeparator, additionRepeatTimes));
}

module.exports = {
  repeater
};
