console.log(countCats([
  [0, 1, '^^'],
  [0, '^^', 2],
  ['^^', '^^', 2]
]));

 
function countCats(matrix) {
  return matrix.reduce((sum, arr) => {
    return sum += arr.reduce((s, item) => {
      return item === '^^' ? s + 1 : s;
    }, 0);
  }, 0);
}