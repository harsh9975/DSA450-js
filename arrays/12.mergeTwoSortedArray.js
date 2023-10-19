//bruteforce
let arr1 = [1, 4, 8, 10];
let arr2 = [2, 3, 9];
let n = 4,
  m = 3;
mergeOptimal(arr1, arr2, n, m);
console.log("The merged arrays are: ");
console.log("arr1[] = " + arr1.join(" "));
console.log("arr2[] = " + arr2.join(" "));

function mergeBruteforce(arr1, arr2, n, m) {
  let arr3 = new Array(n + m);
  let left = 0;
  let right = 0;
  let index = 0;

  while (left < n && right < m) {
    if (arr1[left] <= arr2[right]) {
      arr3[index] = arr1[left];
      index++;
      left++;
    } else {
      arr3[index] = arr2[right];
      right++;
      index++;
    }
  }

  while (left < n) {
    arr3[index++] = arr1[left++];
  }

  while (right < m) {
    arr3[index++] = arr2[right++];
  }
  for (let i = 0; i < n + m; i++) {
    if (i < n) arr1[i] = arr3[i];
    else arr2[i - n] = arr3[i];
  }
}

function mergeOptimal(arr1, arr2, n, m) {
  let left = n - 1;
  let right = 0;
  while (left > 0 && right < m) {
    if (arr1[left] > arr2[right]) {
      [arr1[left], arr2[right]] = [arr2[right], arr1[left]];
      left--;
      right++;
    } else {
      break;
    }
  }
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
}
