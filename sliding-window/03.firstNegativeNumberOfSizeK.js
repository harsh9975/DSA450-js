let arr = [-8, 2, 3, -6, 10];
let k = 2;
console.log(slidingWindowFixed(arr, k));
function slidingWindowFixed(arr, k) {
  let n = arr.length;
  let left = 0;
  let right = 0;
  let window = [];
  let result = [];

  while (right < n) {
    if (arr[right] < 0) {
      window.push(arr[right]);
    }
    console.log(window);
    if (right - left + 1 == k) {
      if (window.length == 0) {
        result.push(0);
      } else {
        result.push(window[0]);
        if (arr[left] == window[0]) {
          window.shift();
        }
      }
      left++;
    }
    right++;
  }
  return result;
}
