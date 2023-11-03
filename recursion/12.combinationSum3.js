let k = 3,
  n = 7;

console.log(combinationSum3(k, n));
function combinationSum3(k, n) {
  let ans = [];
  backtrack(1, k, n, ans, [], 0);
  return ans;
}

function backtrack(index, k, n, ans, ds, sum) {
  if (ds.length == k && sum == n) {
    ans.push([...ds]);
    return;
  }
  if (ds.length >= k || sum > n) {
    return;
  }
  for (let i = index; i <= 9; i++) {
    ds.push(i);
    backtrack(i + 1, k, n, ans, ds, sum + i);
    ds.pop();
  }
}
