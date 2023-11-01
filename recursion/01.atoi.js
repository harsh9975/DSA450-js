console.log(iterativeAtoi("-123"));
console.log(iterativeAtoi("+123"));
console.log(iterativeAtoi("/123"));

function iterativeAtoi(str) {
  let sign = 1,
    base = 0,
    i = 0;

  while (
    i < str.length &&
    (str[i] === " " || str[i] === "\t" || str[i] === "\n" || str[i] === "\r")
  ) {
    i++;
  }

  if (str[i] === "-" || str[i] === "+") {
    sign = str[i] === "-" ? -1 : 1;
    i++;
  }

  while (i < str.length && str[i] >= "0" && str[i] <= "9") {
    if (
      base > Number.MAX_VALUE / 10 ||
      (base === Number.MAX_VALUE / 10 && str[i] - "0" > 7)
    ) {
      return sign === 1 ? Number.MAX_VALUE : Number.MIN_VALUE;
    }
    base = 10 * base + (str[i] - "0");
    i++;
  }

  return base * sign;
}

console.log(recursiveAtoi("-123"));
console.log(recursiveAtoi("+123"));
console.log(recursiveAtoi("/123"));
function recursiveAtoi(str) {
  let sign = 1,
    base = 0,
    i = 0;

  while (
    i < str.length &&
    (str[i] === " " || str[i] === "\t" || str[i] === "\n" || str[i] === "\r")
  ) {
    i++;
  }

  if (str[i] === "-" || str[i] === "+") {
    sign = str[i] === "-" ? -1 : 1;
    i++;
  }

  return convert(sign, str, i, base);
}

function convert(sign, str, i, base) {
  if (i < str.length && str[i] >= "0" && str[i] <= "9") {
    if (
      base > Number.MAX_VALUE / 10 ||
      (base === Number.MAX_VALUE / 10 && str[i] - "0" > 7)
    ) {
      return sign === 1 ? Number.MAX_VALUE : Number.MIN_VALUE;
    }
    base = 10 * base + (str[i] - "0");
    i++;
    return convert(sign, str, i, base);
  }

  return base * sign;
}
