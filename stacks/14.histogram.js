let arr = [2, 1, 5, 6, 2, 3, 1];
let n = arr.length;
console.log(largestAreaOptimal(arr, n));

function largestAreaNaive(arr, n) {
  let maxArea = 0;
  for (let i = 0; i < n; i++) {
    let minHeight = Number.MAX_VALUE;
    for (let j = i; j < n; j++) {
      minHeight = Math.min(minHeight, arr[j]);
      maxArea = Math.max(maxArea, minHeight * (j - i + 1));
    }
  }
  return maxArea;
}

function largestAreaOptimal(arr, n) {
  let stack = [];
  let leftSmall = new Array(n);
  let rightSmall = new Array(n);

  for (let i = 0; i < n; i++) {
    while (stack.length != 0 && arr[stack[stack.length - 1]] >= arr[i]) {
      stack.pop();
    }
    if (stack.length == 0) {
      leftSmall[i] = 0;
    } else {
      leftSmall[i] = stack[stack.length - 1] + 1;
    }
    stack.push(i);
  }

  while (stack.length !== 0) {
    stack.pop();
  }

  for (let i = n - 1; i >= 0; i--) {
    while (stack.length !== 0 && arr[stack[stack.length - 1]] >= arr[i]) {
      stack.pop();
    }
    if (stack.length == 0) {
      rightSmall[i] = n - 1;
    } else {
      rightSmall[i] = stack[stack.length - 1] - 1;
    }
    stack.push(i);
  }

  let maxA = 0;
  for (let i = 0; i < n; i++) {
    maxA = Math.max(maxA, arr[i] * (rightSmall[i] - leftSmall[i] + 1));
  }
  return maxA;
}
