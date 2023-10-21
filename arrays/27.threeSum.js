let arr = [-1, 0, 1, 2, -1, -4];
let n = arr.length;
let k = 0;
let res = tripletOptimal(n, arr, k);
console.log("triplets: ", res);

// TC: O(n3*log(no.of unique triplets)) SC:O(2n)
function tripletNaive(n, arr, val) {
  let ans = [];

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        if (arr[i] + arr[j] + arr[k] == val) {
          let temp = [arr[i], arr[j], arr[k]];
          temp.sort((a, b) => b - a);
          ans.push(temp);
        }
      }
    }
  }

  let set = new Set(ans.map(JSON.stringify));
  ans = Array.from(set).map(JSON.parse);
  return ans;
}

// TC: O(n2*log(no.of unique triplets)) SC:O(2n)
function tripletBetter(n, arr, val) {
  let ans = [];

  for (let i = 0; i < n; i++) {
    let hashset = new Set();
    for (let j = i + 1; j < n; j++) {
      //Calculate the 3rd element:
      let third = val - (arr[i] + arr[j]);
      //Find the element in the set:
      if (hashset.has(third)) {
        let temp = [arr[i], arr[j], third];
        temp.sort((a, b) => a - b);
        ans.push(temp);
      }
      hashset.add(arr[j]);
    }
  }
  let set = new Set(ans.map(JSON.stringify));
  ans = Array.from(set).map(JSON.parse);
  return ans;
}

//TC: O(NlogN)+O(N2) sc:O(no. of quadruplets)
function tripletOptimal(n, arr, val) {
  let ans = [];
  arr.sort((a, b) => a - b);
  for (let i = 0; i < n; i++) {
    if (i != 0 && arr[i] == arr[i - 1]) continue;
    let j = i + 1;
    let k = n - 1;
    while (j < k) {
      let sum = arr[i] + arr[j] + arr[k];
      if (sum < 0) {
        j++;
      } else if (sum > 0) {
        k--;
      } else {
        let temp = [arr[i], arr[j], arr[k]];
        ans.push(temp);
        j++;
        k--;
        while (j < k && arr[j] === arr[j - 1]) j++;
        while (j < k && arr[k] === arr[k + 1]) k--;
      }
    }
  }
  return ans;
}
