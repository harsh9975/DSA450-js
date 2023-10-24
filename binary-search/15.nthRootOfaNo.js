let n = 3,
  m = 27;
let ans = NthRootOptimal(n, m);
console.log("The answer is: " + ans);

function power(b, exp) {
  let ans = 1;
  let base = b;
  while (exp > 0) {
    if (exp % 2) {
      exp--;
      ans = ans * base;
    } else {
      exp /= 2;
      base = base * base;
    }
  }
  return ans;
}

function NthRootNaive(n, m) {
  for (let i = 0; i <= m; i++) {
    let val = power(i, n);
    if (val == m) return i;
    else if (val > m) break;
  }
  return -1;
}

function func(mid, n, m) {
  let ans = 1;
  for (let i = 1; i <= n; i++) {
    ans = ans * mid;
    if (ans > m) return 2;
  }
  if (ans === m) return 1;
  return 0;
}

function NthRootOptimal(n, m) {
  let low = 0;
  let high = m;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let midN = func(mid, n, m);
    if (midN === 1) return mid;
    else if (midN === 0) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}
