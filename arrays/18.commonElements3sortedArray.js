let A = [1, 5, 10, 20, 40, 80],
  n1 = A.length;
let B = [6, 7, 20, 80, 100],
  n2 = B.length;
let C = [3, 4, 15, 20, 30, 70, 80, 120],
  n3 = C.length;

console.log("ans: ", commonElements(A, B, C, n1, n2, n3));

// TC: O(n1 + n2 + n3) SC: O(1)
function commonElements(arr1, arr2, arr3, n1, n2, n3) {
  let i = 0,
    j = 0,
    k = 0;
  let res = [];
  let last = Number.MIN_SAFE_INTEGER;
  while (i < n1 && j < n2 && k < n3) {
    if (arr1[i] === arr2[j] && arr1[i] === arr3[k] && arr1[i] !== last) {
      res.push(arr1[i]);
      last = arr1[i];
      i++;
      j++;
      k++;
    } else if (Math.min(arr1[i], arr2[j], arr3[k]) === arr1[i]) {
      i++;
    } else if (Math.min(arr1[i], arr2[j], arr3[k]) === arr2[j]) {
      j++;
    } else {
      k++;
    }
  }
  if (res.length === 0) {
    return [-1];
  }
  return res;
}
