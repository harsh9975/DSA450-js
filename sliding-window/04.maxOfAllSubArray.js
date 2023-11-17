let arr = [1, 2, 3, 1, 4, 5, 2, 3, 6];
let k = 3;
console.log(slidingWindowFixed(arr, k));
function slidingWindowFixed(arr, k) {
  let n = arr.length;
  let left = 0;
  let right = 0;
  let ans = [];
  let maxNum = Number.MIN_VALUE;

  while (right < n) {
    if (arr[right] > maxNum) {
      maxNum = arr[right];
    }

    if (right - left + 1 === k) {
      ans.push(maxNum);
      if (arr[left] == maxNum) {
        for (let i = left + 1; i <= right; i++) {
          maxNum = Math.max(maxNum, arr[i]);
        }
      }
      left++;
    }
    right++;
  }
  return ans;
}
