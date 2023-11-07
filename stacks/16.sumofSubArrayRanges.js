let arr = [1, 2, 3];
let n = arr.length;
console.log(subArrayRangesOptimal(arr, n));
function subArrayRanges(arr, n) {
  let total = 0;

  for (let i = 0; i < n; i++) {
    let min = arr[i];
    let max = arr[i];
    for (let j = i; j < n; j++) {
      min = Math.min(min, arr[j]);
      max = Math.max(max, arr[j]);
      total += max - min;
    }
  }
  return total;
}

function subArrayRangesOptimal(arr, n) {
  const mod = 10 ** 9 + 7;
  let result = 0;
  let stack = [];

  let left = new Array(n);
  let maxLeft = new Array(n);
  let right = new Array(n);
  let maxRight = new Array(n);

  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && arr[i] < arr[stack[stack.length - 1]]) {
      stack.pop();
    }
    left[i] = stack.length === 0 ? i + 1 : i - stack[stack.length - 1];
    stack.push(i);
  }

  stack = [];

  for (let i = n - 1; i >= 0; i--) {
    while (stack.length > 0 && arr[i] <= arr[stack[stack.length - 1]]) {
      stack.pop();
    }
    right[i] = stack.length === 0 ? n - i : stack[stack.length - 1] - i;
    stack.push(i);
  }

  stack = [];
  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && arr[i] > arr[stack[stack.length - 1]]) {
      stack.pop();
    }
    maxLeft[i] = stack.length === 0 ? i + 1 : i - stack[stack.length - 1];
    stack.push(i);
  }

  stack = [];
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length > 0 && arr[i] >= arr[stack[stack.length - 1]]) {
      stack.pop();
    }
    maxRight[i] = stack.length === 0 ? n - i : stack[stack.length - 1] - i;
    stack.push(i);
  }

  for (let i = 0; i < n; i++) {
    result += (maxLeft[i] * maxRight[i] - left[i] * right[i]) * arr[i];
    result %= mod; // Ensure the result stays within the modulo
  }

  return result;
}
