let arr = [1, 5, 4, 2, 9, 9, 9];
let k = 3;
console.log(slidingWindowFixed(arr, k));
function slidingWindowFixed(arr, k) {
  let n = arr.length;
  if (n < k) return null;
  let left = 0;
  let right = 0;
  let maxSum = 0;
  let currSum = 0;
  const windowSet = new Set();

  while (right < n) {
    if (!windowSet.has(arr[right]) && windowSet.size < k) {
      windowSet.add(arr[right]);
      currSum += arr[right];
      right++;
    } else {
      windowSet.delete(arr[left]);
      currSum -= arr[left];
      left++;
    }

    if (windowSet.size === k) {
      maxSum = Math.max(maxSum, currSum);
      windowSet.delete(arr[left]);
      currSum -= arr[left];
      left++;
    }
  }
  return maxSum;
}

function ifNotDistinct(arr, k) {
  const n = arr.length;
  if (n < k) return null;

  let left = 0;
  let right = 0;
  let maxSum = 0;
  let currentSum = 0;

  while (right < n) {
    currentSum += arr[right];

    if (right - left + 1 === k) {
      maxSum = Math.max(maxSum, currentSum);
      currentSum -= arr[left];
      left++;
    }

    right++;
  }

  return maxSum;
}
