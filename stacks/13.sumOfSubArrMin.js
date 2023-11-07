let arr = [3, 1, 2, 4];
let n = arr.length;
console.log(subArrayMinOptimal(arr, n));

function subArrayMinNaive(arr, n) {
  const mod = 10 ** 9 + 7;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    let min = arr[i];
    for (let j = i; j < n; j++) {
      min = Math.min(min, arr[j]);
      sum = (sum + min) % mod;
    }
  }
  return sum;
}

function subArrayMinOptimal(arr, n) {
  const mod = 10 ** 9 + 7;
  let left = new Array(n);
  let right = new Array(n);
  let stack = [];

  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && arr[stack[stack.length - 1]] > arr[i]) {
      stack.pop();
    }
    left[i] = stack.length === 0 ? -1 : stack[stack.length - 1];
    stack.push(i);
  }

  stack.length = 0;

  for (let i = n - 1; i >= 0; i--) {
    while (stack.length !== 0 && arr[stack[stack.length - 1]] >= arr[i]) {
      stack.pop();
    }
    right[i] = stack.length == 0 ? n : stack[stack.length - 1];
    stack.push(i);
  }

  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum = (sum + (i - left[i]) * (right[i] - i) * arr[i]) % mod;
  }
  return sum;
}
