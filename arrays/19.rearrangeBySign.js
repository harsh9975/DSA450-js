let A = [1, 2, -4, -5];
let n = A.length;

let ans = rearrangebySignOptimal(A, n);

// Print the result.
console.log(ans.join(" "));

// TC: O(n+n/2) O(n/2+n/2)
function rearrangebySignNaive(A, n) {
  let pos = [];
  let neg = [];

  for (let i = 0; i < n; i++) {
    if (A[i] < 0) {
      neg.push(A[i]);
    } else {
      pos.push(A[i]);
    }
  }

  for (let i = 0; i < n / 2; i++) {
    A[2 * i] = pos[i];
    A[2 * i + 1] = neg[i];
  }

  return A;
}

// TC: O(n)  Sc: O(n)
function rearrangebySignOptimal(A, n) {
  let ans = new Array(n).fill(0);
  let posIndex = 0;
  let negIndex = 1;
  for (let i = 0; i < n; i++) {
    if (A[i] < 0) {
      ans[negIndex] = A[i];
      negIndex += 2;
    } else {
      ans[posIndex] = A[i];
      posIndex += 2;
    }
  }
  return ans;
}
