let a1 = [11, 7, 1, 13, 21, 3, 7, 3];
let n = a1.length;
let a2 = [11, 3, 7, 1, 7];
let m = a2.length;
console.log(isSubsetOptimal(a1, a2, n, m));
// TC: O(n2)
function isSubsetNaive(a1, a2, n, m) {
  // Iterate through the elements of a2
  let count = 0;

  for (let i = 0; i < m; i++) {
    let found = false;
    for (let j = 0; j < n; j++) {
      if (a1[j] === a2[i]) {
        count++;
        a1[j] = -1;
        found = true;
        break;
      }
    }
    if (!found) {
      return "No"; // Element from a2 not found in a1
    }
  }

  return m === count ? "Yes" : "No";
}

function isSubsetOptimal(a1, a2, n, m) {
  let freq = new Map();
  for (let i = 0; i < n; i++) {
    freq.set(a1[i], (freq.get(a1[i]) || 0) + 1);
  }

  for (let num of a2) {
    if (!freq.has(num)) {
      return "No";
    }
    freq.set(num, (freq.get(num) || 0) - 1);
    if (freq.get(num) < 0) {
      return "No";
    }
  }
  return "Yes";
}
