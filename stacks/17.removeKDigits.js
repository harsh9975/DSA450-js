let num = "1432219";
let k = 3;
console.log(removeKdigits(num, k));

function removeKdigits(num, k) {
  let stack = [];

  for (let digit of num) {
    while (k > 0 && stack.length > 0 && digit < stack[stack.length - 1]) {
      stack.pop();
      k--;
    }
    stack.push(digit);
  }

  stack.length = Math.max(stack.length - k, 0);

  let result = stack.join("");
  result = result.replace(/^0+/, "");
  return result === "" ? "0" : result;
}
