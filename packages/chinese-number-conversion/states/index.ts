import { atom, selector } from 'recoil';
import { stringToNumber } from '../lib/stringToNumber';
import { addComma } from '../lib/addComma';

export const textState = atom({
  key: 'textState',
  default: '',
});

export const commaState = atom({
  key: 'commaState',
  default: true,
});

export const resultState = selector({
  key: 'resultState',
  get: ({ get }) => {
    const text = get(textState);
    const comma = get(commaState);
    const result = `${stringToNumber(text)}`;
    return comma ? addComma(result) : result;
  },
});
