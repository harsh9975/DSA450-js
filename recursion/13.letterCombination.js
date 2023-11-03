let digit = "234";
const map = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};

console.log(letterCombination(digit));

function letterCombination(digit) {
  if (!digit) return [];
  const ans = [];
  backtrack(0, ans, digit, "");
  return ans;
}

function backtrack(i, ans, digit, curr) {
  if (i == digit.length) {
    ans.push(curr);
    return;
  }

  for (const letter of map[digit[i]]) {
    backtrack(i + 1, ans, digit, curr + letter);
  }
}
