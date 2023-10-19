let A = [2, 1, 5, 4, 3, 0, 0];
let ans = nextGreaterPermutation(A);

console.log("The next permutation is: [" + ans.join(" ") + "]");

// TC O(3n) SC O(1)
function nextGreaterPermutation(arr) {
  let n = arr.length;
  let index = -1;
  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] < arr[i + 1]) {
      index = i;
      break;
    }
  }
  if (index == -1) {
    arr.reverse();
    return arr;
  }

  for (let i = n - 1; i > index; i--) {
    if (arr[i] > arr[index]) {
      [arr[i], arr[index]] = [arr[index], arr[i]];
      break;
    }
  }
  A.splice(index + 1, n - index - 1, ...A.slice(index + 1).reverse());
  return A;
}
