let arr = [2, 5, 8, 4, 6, 11];
let sum = 13;
let ans = [];
let v = [];

subSeq(0, arr, sum, ans, 0, v);
console.log(ans);

//[[1,1],[2]]

function subSeq(i, arr, sum, ans, currSum, v) {
  if (i == arr.length) {
    if (currSum == sum) {
      ans.push([...v]);
    }
    return;
  }
  subSeq(i + 1, arr, sum, ans, currSum + arr[i], [...v, arr[i]]);
  subSeq(i + 1, arr, sum, ans, currSum, v);
}
