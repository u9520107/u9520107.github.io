import { charactorToNumber } from './charactorToNumber';

export function stringToNumber(str: string): number | null {
  let result = 0;
  let multiplier = 1;
  let largeMultiplier = 1;
  let register = 0;
  let lastNumber = 0;

  for (let i = str.length - 1; i > -1; i--) {
    const current = charactorToNumber(str[i]);
    if (current !== null) {
      if (current === 0) {
        // ignore
      } else if (current >= 10000) {
        register += lastNumber * multiplier;
        lastNumber = 0;
        multiplier = 1;
        // is a large multiplier
        result += register * largeMultiplier;
        register = 0;
        largeMultiplier = current;
      } else if (current >= 10) {
        // is a multiplier
        register += lastNumber * multiplier;
        lastNumber = 0;
        multiplier = current;
      } else {
        lastNumber = current;
      }
    }
  }
  if (multiplier === 10 && lastNumber === 0) {
    register += multiplier;
  } else {
    register += lastNumber * multiplier;
  }
  result += register * largeMultiplier;

  return result;
}
