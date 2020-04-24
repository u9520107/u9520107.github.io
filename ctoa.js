(() => {
  function cCharToNum(char) {
    switch (char[0]) {
      case "一":
      case "壹":
        return 1;
      case "二":
      case "貳":
      case "贰":
      case "貮":
        return 2;
      case "三":
      case "參":
      case "参":
      case "叁":
        return 3;
      case "四":
      case "肆":
        return 4;
      case "五":
      case "伍":
        return 5;
      case "六":
      case "陸":
      case "陆":
        return 6;
      case "七":
      case "柒":
        return 7;
      case "八":
      case "捌":
        return 8;
      case "九":
      case "玖":
        return 9;
      case "零":
        return 0;

      case "十":
      case "拾":
        return 10;
      case "百":
      case "佰":
        return 100;
      case "千":
      case "仟":
        return 1000;

      case "萬":
      case "万":
        return 10000;
      case "億":
      case "亿":
        return 100000000;
      case "兆":
        return 1000000000000;

      default:
        return null;
    }
  }

  const cMultipliers = [1, 10, 100, 1000, 10000, 100000000, 1000000000000];

  function cStrToNum(str) {
    let result = 0;
    let multiplier = 1;
    let largeMultiplier = 1;
    let register = 0;
    let lastNumber = 0;

    for (let i = str.length - 1; i > -1; i--) {
      const current = cCharToNum(str[i]);
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

  function addComma(str) {
    const arr = str.split("").reverse();
    const result = [];
    for (let i = 0, len = arr.length; i < len; i++) {
      if (i > 0 && i % 3 === 0) {
        result.push(",");
      }
      result.push(arr[i]);
    }
    return result.reverse().join("");
  }

  function ctoa(str, delimiter = true) {
    const result = `${cStrToNum(str)}`;
    return delimiter ? addComma(result) : result;
  }

  const inputEl = document.querySelector("#input");
  const outputEl = document.querySelector("#output");

  inputEl.addEventListener("change", (e) => {
    const value = e.currentTarget.value;
    const result = ctoa(value);
    outputEl.innerHTML = result;
  });
})();
