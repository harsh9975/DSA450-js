let arr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
let n = arr.length;
console.log(trapOptimal(arr, n));
function trapNaive(arr, n) {
  let waterTrapped = 0;
  for (let i = 0; i < n; i++) {
    let leftMax = 0;
    let rightMax = 0;
    for (let j = i; j >= 0; j--) {
      leftMax = Math.max(leftMax, arr[j]);
    }
    for (let j = i; j < n; j++) {
      rightMax = Math.max(rightMax, arr[j]);
    }
    waterTrapped += Math.min(leftMax, rightMax) - arr[i];
  }
  return waterTrapped;
}

function trapBetter(arr, n) {
  let prefix = new Array(n);
  let suffix = new Array(n);
  prefix[0] = arr[0];
  for (let i = 1; i < n; i++) {
    prefix[i] = Math.max(prefix[i - 1], arr[i]);
  }
  suffix[n - 1] = arr[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    suffix[i] = Math.max(suffix[i + 1], arr[i]);
  }
  let waterTrapped = 0;
  for (let i = 0; i < n; i++) {
    waterTrapped += Math.min(prefix[i], suffix[i]) - arr[i];
  }
  return waterTrapped;
}

function trapOptimal(arr, n) {
  let left = 0,
    right = n - 1;
  let waterTrapped = 0;
  let maxLeft = 0,
    maxRight = 0;

  while (left <= right) {
    if (arr[left] <= arr[right]) {
      if (arr[left] >= maxLeft) {
        maxLeft = arr[left];
      } else {
        waterTrapped += maxLeft - arr[left];
      }
      left++;
    } else {
      if (arr[right] >= maxRight) {
        maxRight = arr[right];
      } else {
        waterTrapped += maxRight - arr[right];
      }
      right--;
    }
  }
  return waterTrapped;
}
