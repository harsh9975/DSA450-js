let arr = [4, 5, 2, 10, 8];
console.log(nextSmallerElement(arr));
function nextSmallerElement(A) {
  let n = A.length;
  let stack = [];
  let ans = [];
  ans[0] = -1;

  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && stack[stack.length - 1] >= A[i]) {
      stack.pop();
    }
    if (stack.length === 0) {
      ans[i] = -1;
    } else {
      ans[i] = stack[stack.length - 1];
    }
    stack.push(A[i]);
  }
  return ans;
}
