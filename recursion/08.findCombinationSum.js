let arr = [2, 3, 5];
let target = 8;
let ans = [];
findCombinationSum(0, arr, target, ans, []);
console.log(ans);
function findCombinationSum(i, arr, target, ans, ds) {
  if (i == arr.length) {
    if (target == 0) {
      ans.push([...ds]);
    }
    return;
  }
  if (arr[i] <= target) {
    ds.push(arr[i]);
    findCombinationSum(i, arr, target - arr[i], ans, ds);
    ds.pop();
  }
  findCombinationSum(i + 1, arr, target, ans, ds);
}
