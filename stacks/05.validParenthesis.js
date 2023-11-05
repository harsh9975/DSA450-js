let str = "(])";
console.log(checkValidParenthesis(str));
function checkValidParenthesis(str) {
  let n = str.length;
  let stack = [];
  for (let i = 0; i < n; i++) {
    if (str[i] == "(" || str[i] == "[" || str[i] == "{") {
      stack.push(str[i]);
    } else {
      if (stack.length == 0) return false;
      ch = stack[stack.length - 1];
      if (
        (str[i] == ")" && ch == "(") ||
        (str[i] == "}" && ch == "{") ||
        (str[i] == "]" && ch == "[")
      ) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length == 0;
}
