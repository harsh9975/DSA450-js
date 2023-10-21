let arr = [100, 200, 1, 2, 3, 4];
let ans = longestSuccessiveElementsOptimal(arr);
console.log("The longest consecutive sequence is", ans);

//TC: O(n2)
function longestSuccessiveElementsNaive(arr) {
  let n = arr.length;
  let longest = 1;
  for (let i = 0; i < n; i++) {
    let x = arr[i];
    let cnt = 1;
    while (linearSearch(arr, x + 1) == true) {
      x += 1;
      cnt += 1;
    }
    longest = Math.max(longest, cnt);
  }
  return longest;
}

function linearSearch(arr, num) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    if (arr[i] == num) {
      return true;
    }
  }
  return false;
}

//TC: O(nlogn)+ O(n)
function longestSuccessiveElementsBetter(arr) {
  let n = arr.length;
  if (n == 0) return 0;
  arr.sort((a, b) => a - b);
  let lastSmaller = -Infinity;
  let cnt = 0;
  let longest = 1;

  for (let i = 0; i < n; i++) {
    if (arr[i] - 1 == lastSmaller) {
      cnt += 1;
      lastSmaller = arr[i];
    } else if (arr[i] != lastSmaller) {
      cnt = 1;
      lastSmaller = arr[i];
    }
    longest = Math.max(longest, cnt);
  }
  return longest;
}

// TC: O(n+2n) SC O(n)
function longestSuccessiveElementsOptimal(arr) {
  let n = arr.length;
  if (n == 0) return 0;
  let longest = 1;
  let st = new Set();

  for (let i = 0; i < n; i++) {
    st.add(arr[i]);
  }

  for (let it of st) {
    if (!st.has(it - 1)) {
      let cnt = 1;
      let x = it;

      while (st.has(x + 1)) {
        x += 1;
        cnt += 1;
      }
      longest = Math.max(longest, cnt);
    }
  }
  return longest;
}
