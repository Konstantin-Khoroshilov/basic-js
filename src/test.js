const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  } else {
    const decideFate = (prev, item, next) => {
      //пропустить
      if (
        //я - команда
        item === '--discard-next' ||
        item === '--discard-prev' ||
        item === '--double-next' ||
        item === '--double-prev' ||
        //пред. удаляет меня
        prev === '--discard-next' ||
        //след. удаляет меня
        next === '--discard-prev' && prev !== '--double-next'
      ) {
        return 'skip';
      }
      //утроить
      if (
        //пред. удваивает меня
        prev === '--double-next' &&
        //след. удваивает меня
        next === '--double-prev'
      ) {
        return 'triple';
      }
      if (prev === '--double-next' && next === '--discard-prev') {
        return 'add';
      }
      //удвоить
      if (
        //пред. удваивает меня
        prev === '--double-next' ||
        //след. удваивает меня
        next === '--double-prev'
      ) {
        return 'double';
      }
      return 'add';
    }
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr.length === 1) {
        const fate = decideFate(arr[i], arr[i], arr[i]);
        if (fate === 'add') result.push(arr[i]);
        continue;
      }
      if (i === arr.length - 1) {
        const fate = decideFate(arr[i - 1], arr[i], arr[i]);
        if (fate === 'add') result.push(arr[i]);
        if (fate === 'double') result.push(arr[i], arr[i]);
        continue;
      }
      if (i === 0) {
        const fate = decideFate(arr[i], arr[i], arr[i + 1]);
        if (fate === 'add') result.push(arr[i]);
        if (fate === 'double') result.push(arr[i], arr[i]);
        continue;
      }
      const fate = decideFate(arr[i - 1], arr[i], arr[i + 1]);
      console.log(fate)
      if (fate === 'add') result.push(arr[i]);
      if (fate === 'double') result.push(arr[i], arr[i]);
      if (fate === 'triple') result.push(arr[i], arr[i], arr[i]);
    }
    return result;
  }
}

console.log(transform([1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5]))