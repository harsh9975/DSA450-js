let s = "(()())(())";
let ans = removeOuterParentheses(s);
console.log("ans: ", removeOuterParentheses(s));

function removeOuterParentheses(s) {
  let res = "";
  let bal = 0;
  for (let ch of s) {
    if (ch == "(") {
      if (bal > 0) {
        res += "(";
      }
      bal++;
    } else if (ch === ")") {
      bal--;
      if (bal > 0) {
        res += ")";
      }
    }
  }
  return res;
}
