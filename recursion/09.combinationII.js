function findCombinationSum(i, arr, target, ans, ds) {
  if (target === 0) {
    ans.push([...ds]);
    return;
  }

  for (let j = i; j < arr.length; j++) {
    if (j > i && arr[j] === arr[j - 1]) continue;
    if (arr[j] > target) break;

    ds.push(arr[j]);
    findCombinationSum(j + 1, arr, target - arr[j], ans, ds);
    ds.pop();
  }
}

let ans = [];
let candidates = [10, 1, 2, 7, 6, 1, 5].sort((a, b) => a - b);
let target = 8;

findCombinationSum(0, candidates, target, ans, []);
console.log(ans);
