let num = 58;
console.log("ans: ", integerToRomanOptimal(num));

function integerToRomanNaive(num) {
  let map = new Map();
  map.set(1, "I");
  map.set(5, "V");
  map.set(10, "X");
  map.set(50, "L");
  map.set(100, "C");
  map.set(500, "D");
  map.set(1000, "M");

  let base = 1;
  const result = [];
  while (num > 0) {
    const last = num % 10;
    if (last < 4) {
      for (let k = last; k > 0; k--) {
        result.unshift(map.get(base));
      }
    } else if (last == 4) {
      result.unshift(...[map.get(base), map.get(base * 5)]);
    } else if (last == 5) {
      result.unshift(map.get(base * 5));
    } else if (last < 9) {
      for (let k = last; k > 5; k--) {
        result.unshift(map.get(base));
      }
      result.unshift(map.get(base * 5));
    } else {
      result.unshift(...[map.get(base), map.get(base * 10)]);
    }
    base *= 10;
    num = (num - last) / 10;
  }
  return result.join("");
}

function integerToRomanOptimal(num) {
  const map = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];

  let res = "";

  for (const [roman, val] of map) {
    while (num >= val) {
      res += roman;
      num -= val;
    }
  }
  return res;
}
