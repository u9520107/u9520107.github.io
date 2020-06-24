export function charactorToNumber(char: string): number | null {
  switch (char[0]) {
    case '一':
    case '壹':
      return 1;
    case '二':
    case '貳':
    case '贰':
    case '貮':
      return 2;
    case '三':
    case '參':
    case '参':
    case '叁':
      return 3;
    case '四':
    case '肆':
      return 4;
    case '五':
    case '伍':
      return 5;
    case '六':
    case '陸':
    case '陆':
      return 6;
    case '七':
    case '柒':
      return 7;
    case '八':
    case '捌':
      return 8;
    case '九':
    case '玖':
      return 9;
    case '零':
      return 0;

    case '十':
    case '拾':
      return 10;
    case '百':
    case '佰':
      return 100;
    case '千':
    case '仟':
      return 1000;

    case '萬':
    case '万':
      return 10000;
    case '億':
    case '亿':
      return 100000000;
    case '兆':
      return 1000000000000;
    default:
      return null;
  }
}
