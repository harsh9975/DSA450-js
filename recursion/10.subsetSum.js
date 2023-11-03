let arr = [3, 1, 2];
let n = arr.length;
console.log(subSetSum(arr, n));

function subSetSum(arr, n) {
  let ans = [];
  subSetSumHelper(0, arr, n, ans, 0);
  return ans;
}

function subSetSumHelper(index, arr, n, ans, sum) {
  if (index == n) {
    ans.push(sum);
    return;
  }

  subSetSumHelper(index + 1, arr, n, ans, sum + arr[index]);
  subSetSumHelper(index + 1, arr, n, ans, sum);
}

//suppose I have to find subset;
let ans = [];
subSet(0, arr, n, ans, []);
console.log("subset: ", ans);
function subSet(index, arr, n, ans, ds) {
  if (index == n) {
    ans.push(ds);
    return;
  }

  subSet(index + 1, arr, n, ans, [...ds, arr[index]]);
  subSet(index + 1, arr, n, ans, ds);
}
