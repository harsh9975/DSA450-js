let arr = [2, 2, 1, 1, 1, 2, 2];
let n = arr.length;
let k = 2;
let ans = majorityElementBetter(arr, n, k);
console.log("The majority element is:", ans);

function majorityElementNaive(arr, n, k) {
  for (let i = 0; i < n; i++) {
    let cnt = 0;
    for (let j = 0; j < n; j++) {
      if (arr[i] == arr[j]) {
        cnt++;
      }
    }

    if (cnt > Math.floor(n / k)) {
      return arr[i];
    }
  }
  return -1;
}

function majorityElementBetter(arr, n, k) {
  let ls = [];
  const mpp = new Map();
  const mini = Math.floor(n / k) + 1;

  for (let i = 0; i < n; i++) {
    if (mpp.has(arr[i])) {
      mpp.set(arr[i], mpp.get(arr[i]) + 1);
    } else {
      mpp.set(arr[i], 1);
    }

    if (mpp.get(arr[i]) == mini) {
      ls.push(arr[i]);
    }
  }
  return ls;
}

//morries voting algo
function majorityElement(arr) {
  // Size of the given array
  let n = arr.length;
  let cnt = 0; // Count
  let el; // Element

  // Applying the algorithm
  for (let i = 0; i < n; i++) {
    if (cnt === 0) {
      cnt = 1;
      el = arr[i];
    } else if (el === arr[i]) {
      cnt++;
    } else {
      cnt--;
    }
  }

  // Checking if the stored element is the majority element
  let cnt1 = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] === el) {
      cnt1++;
    }
  }

  if (cnt1 > Math.floor(n / 2)) {
    return el;
  }
  return -1;
}

function majorityElement(v) {
  let n = v.length; // size of the array

  let cnt1 = 0,
    cnt2 = 0; // counts
  let el1 = -Infinity; // element 1
  let el2 = -Infinity; // element 2

  // applying the Extended Boyer Moore's Voting Algorithm:
  for (let i = 0; i < n; i++) {
    if (cnt1 === 0 && el2 !== v[i]) {
      cnt1 = 1;
      el1 = v[i];
    } else if (cnt2 === 0 && el1 !== v[i]) {
      cnt2 = 1;
      el2 = v[i];
    } else if (v[i] === el1) cnt1++;
    else if (v[i] === el2) cnt2++;
    else {
      cnt1--, cnt2--;
    }
  }

  let ls = []; // list of answers

  // Manually check if the stored elements in
  // el1 and el2 are the majority elements:
  (cnt1 = 0), (cnt2 = 0);
  for (let i = 0; i < n; i++) {
    if (v[i] === el1) cnt1++;
    if (v[i] === el2) cnt2++;
  }

  let mini = Math.floor(n / 3) + 1;
  if (cnt1 >= mini) ls.push(el1);
  if (cnt2 >= mini) ls.push(el2);

  // Uncomment the following line
  // if it is told to sort the answer array:
  // ls.sort(); // TC --> O(2*log2) ~ O(1);

  return ls;
}
