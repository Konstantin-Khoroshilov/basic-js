const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  return matrix.map((matrixLine, matrixLineIndex) => matrixLine.map((matrixCell, matrixCellIndex) => {
    const topLeft = matrix[matrixLineIndex - 1] ? matrix[matrixLineIndex - 1][matrixCellIndex - 1] : false;
    const topMiddle = matrix[matrixLineIndex - 1] ? matrix[matrixLineIndex - 1][matrixCellIndex] : false;
    const topRight = matrix[matrixLineIndex - 1] ? matrix[matrixLineIndex - 1][matrixCellIndex + 1] : false;
    const middleLeft = matrix[matrixLineIndex] ? matrix[matrixLineIndex][matrixCellIndex - 1] : false;
    const middleRight = matrix[matrixLineIndex] ? matrix[matrixLineIndex][matrixCellIndex + 1] : false;
    const bottomLeft = matrix[matrixLineIndex + 1] ? matrix[matrixLineIndex + 1][matrixCellIndex - 1] : false;
    const bottomMiddle = matrix[matrixLineIndex + 1] ? matrix[matrixLineIndex + 1][matrixCellIndex] : false;
    const bottomRight = matrix[matrixLineIndex + 1] ? matrix[matrixLineIndex + 1][matrixCellIndex + 1] : false;
    return [topLeft, topMiddle, topRight, middleLeft, middleRight, bottomLeft, bottomMiddle, bottomRight].reduce((res, item) => {
      return item ? res + 1 : res;
    }, 0);
  }));
}

module.exports = {
  minesweeper
};
