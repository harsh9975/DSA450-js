let arr = [1, 2, 3, 4, 5, 6, 7];
let k = 2;

//naive using temp array TC O(N) SC 0(k)
rotateLeftNaive(arr, k);
rotateRightNaive(arr, k);

function rotateRightNaive(arr, k) {
  let n = arr.length;
  if (n == 0) return;
  k = k % n;
  if (k > n) return;
  let temp = [];
  for (let i = n - k; i < n; i++) {
    // console.log("i=", i, "  n=", n, "  k=", k, "   , i - n + k = ", i - n + k);
    temp[i - n + k] = arr[i];
  }
  for (let i = n - k - 1; i >= 0; i--) {
    arr[i + k] = arr[i];
  }
  for (let i = 0; i < k; i++) {
    arr[i] = temp[i];
  }
  console.log("arr", arr);
}

//op ===> [ 3, 4, 5, 6, 7, 1, 2];
//[3,4,5,6] [1, 2]
//k+1 -- n   //0 -- k-1
// in temp  [0 to n-k]
function rotateLeftNaive(arr, k) {
  let n = arr.length;
  if (n == 0) return;
  k = k % n;
  if (k > n) return;
  let temp = [];

  for (let i = 0; i < k; i++) {
    temp[i] = arr[i];
  }
  for (let i = 0; i < n - k; i++) {
    arr[i] = arr[i + k];
  }
  for (let i = n - k; i < n; i++) {
    arr[i] = temp[i - n + k];
  }
  console.log("arr", arr);
}

// optimal ==> reverse the array
rotateLeft(arr, k);
rotateRight(arr, k);

function reverse(arr, l, r) {
  while (l < r) {
    let temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;
    l++;
    r--;
  }
}

function rotateLeft(arr, k) {
  let n = arr.length;
  reverse(arr, 0, k - 1);
  reverse(arr, k, n - 1);
  reverse(arr, 0, n - 1);
  console.log("reverse left = ", arr);
}

function rotateRight(arr, k) {
  let n = arr.length;
  reverse(arr, 0, n - k - 1);
  reverse(arr, n - k, n - 1);
  reverse(arr, 0, n - 1);
  console.log("reverse right = ", arr);
}
