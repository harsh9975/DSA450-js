let arr = [1, 2, 2];
let n = arr.length;
console.log(subsetWithDup(arr, n));

function subsetWithDup(arr, n) {
  let ans = [];
  subSetHelper(0, arr, n, ans, []);
  return ans;
}

function subSetHelper(index, arr, n, ans, ds) {
  ans.push([...ds]);
  for (let i = index; i < n; i++) {
    if (i != index && arr[i] === arr[i - 1]) continue;
    ds.push(arr[i]);
    subSetHelper(i + 1, arr, n, ans, ds);
    ds.pop();
  }
}
