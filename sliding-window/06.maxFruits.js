let arr = [1, 2, 1, 1, 3, 4, 2, 2, 2, 2, 4];
console.log(findMaxFruits(arr));
function findMaxFruits(arr) {
  let n = arr.length;
  let left = 0;
  let right = 0;
  let ans = 0;

  let map = new Map();

  while (right < n) {
    map.set(arr[right], (map.get(arr[right]) || 0) + 1);
    if (map.size == 3) {
      while (map.size != 2) {
        if (map.get(arr[left]) == 1) {
          map.delete(arr[left]);
        } else {
          map.set(arr[left], (map.get(arr[left]) || 0) - 1);
        }
        left++;
      }
    }
    ans = Math.max(ans, right - left + 1);
    right++;
  }
  return ans;
}
