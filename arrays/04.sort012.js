//naive approach ==> use sorting algo (tc:O(nlogn))
//better approach ===> store count in variable zero, one, two (tc:o(2n) )
//optimal approach ===> Dutch National flag algorithm
// This algorithm contains 3 pointers i.e. low, mid, and high, and 3 main rules.  The rules are the following:

// arr[0….low-1] contains 0. [Extreme left part]
// arr[low….mid-1] contains 1.
// arr[high+1….n-1] contains 2. [Extreme right part], n = size of the array

let arr = [0, 2, 1, 2, 0, 1];
sortArray(arr);

function swap(arr, first, second) {
  [arr[first], arr[second]] = [arr[second], arr[first]];
}

function sortArray(arr) {
  let n = arr.length;
  let low = 0,
    mid = 0,
    high = n - 1;

  while (mid <= high) {
    if (arr[mid] == 0) {
      swap(arr, low++, mid++);
    } else if (arr[mid] == 2) {
      swap(arr, mid, high--);
    } else {
      mid++;
    }
  }

  console.log(arr);
}
