export function addComma(str: string = '') {
  const result: string[] = [];
  str
    .split('')
    .reverse()
    .forEach((digit, index) => {
      result.push(digit);
      if ((index + 1) % 3 === 0) {
        result.push(',');
      }
    });
  return result.reverse().join('');
}
