let arr = [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9];
let n = arr.length;
console.log("min jump", minJumpBruteforce(arr, n));

function minJumpBruteforce(arr, n) {
  if (n == 1) return 0;
  if (arr[0] == 0) return -1;

  let rng = arr[0];
  let sl = arr[0];
  let jp = 1;

  for (let i = 1; i < n; i++) {
    if (i == n - 1) return jp;
    rng = Math.max(rng, i + arr[i]);
    sl--;
    if (sl == 0) {
      jp++;
      if (rng <= i) {
        return -1;
      }
      sl = rng - i;
    }
  }
  return -1;
}
