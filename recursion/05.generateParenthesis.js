let n = 3;
console.log(generateParenthesis(3));

function generateParenthesis(n) {
  let result = [];
  generateAllParenthesis(result, "(", 1, 0, n);
  return result;
}

function generateAllParenthesis(result, str, open, close, n) {
  if (open == n && close == n) {
    result.push(str);
    return;
  }
  if (open < n) {
    generateAllParenthesis(result, str + "(", open + 1, close, n);
  }
  if (close < open) {
    generateAllParenthesis(result, str + ")", open, close + 1, n);
  }
}
