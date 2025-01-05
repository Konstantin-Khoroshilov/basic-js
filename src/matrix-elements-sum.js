const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  return matrix.reduce((res, array, arrIndex) => {
    if (arrIndex === 0) {
      return res + array.reduce((result, num) => result + num, 0)
    } else {
      return res + array.reduce((result, num, index) => {
        let numberAppearBelowZero = false;
        for (let i = 0; i < arrIndex; i++) {
          if (matrix[i][index] === 0) {
            numberAppearBelowZero = true;
          }
        }
        return numberAppearBelowZero ? result : result + num;
      }, 0);
    }
  }, 0);
}

module.exports = {
  getMatrixElementsSum
};
