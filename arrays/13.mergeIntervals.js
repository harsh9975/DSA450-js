const arr = [
  [1, 3],
  [8, 10],
  [2, 6],
  [15, 18],
];
const ans = mergeOverlappingIntervalsOptimal(arr);
console.log("The merged intervals are:");
for (let it of ans) {
  console.log(`[${it[0]}, ${it[1]}]`);
}

// TC: O(nlog)+O(n2) SC: O(n2)
function mergeOverlappingIntervalsNaive(arr) {
  let n = arr.length;
  arr.sort((a, b) => a[0] - b[0]);

  const ans = [];
  for (let i = 0; i < n; i++) {
    let start = arr[i][0];
    let end = arr[i][1];

    //Skip all the merged intervals:
    if (ans.length && end <= ans[ans.length - 1][1]) {
      continue;
    }

    //check the rest of the intervals
    for (let j = i + 1; j < n; j++) {
      if (arr[j][0] < end) {
        end = Math.max(end, arr[j][1]);
      } else {
        break;
      }
    }

    ans.push([start, end]);
  }

  return ans;
}

//TC: O(nlogn) + O(n)
function mergeOverlappingIntervalsOptimal(arr) {
  let n = arr.length;
  arr.sort((a, b) => a[0] - b[0]);
  const ans = [arr[0]];

  for (let i = 1; i < n; i++) {
    const last = ans[ans.length - 1];
    const curr = arr[i];
    if (curr[0] <= last[1]) {
      last[1] = Math.max(curr[1], last[1]);
    } else {
      ans.push(curr);
    }
  }
  return ans;
}
