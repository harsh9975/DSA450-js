let str = "test string";
console.log(printDuplicates(str));

function printDuplicatesnaive(str) {
  let map = new Map();
  let ans = [];
  for (let i = 0; i < str.length; i++) {
    if (map.has(str[i])) {
      map.set(str[i], map.get(str[i]) + 1);
    } else {
      map.set(str[i], 1);
    }
  }

  for (let [val, count] of map) {
    if (count > 1) {
      ans.push(val);
    }
  }

  return ans;
}

function printDuplicates(str) {
  const charCount = {};

  // Loop through the string to count character occurrences
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  return charCount;
}
