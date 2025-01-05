function isMAC48Address(n) {
  const numbers = n.split('-');
  if (numbers.length < 6) return false;
  let res = true;
  numbers.forEach(number => {
    if (Number.parseInt(number, 16).toString(16).padStart(2, '0') !== number.toLowerCase()) {
      res = false;
    }
  });
  return res;
}

console.log(isMAC48Address('00-1B-63-84-45-E6'))