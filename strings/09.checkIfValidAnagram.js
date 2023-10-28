let s = "INTEGER";
let t = "TEGERNI";
console.log(isValidAnagramOptimal(s, t));

function isValidAnagramNaive(s, t) {
  s = s.split("").sort().join("");
  t = t.split("").sort().join("");
  return s === t;
}

function isValidAnagramOptimal(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let freq = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    freq[s.charCodeAt(i) - "A".charCodeAt(0)]++;
  }
  for (let i = 0; i < t.length; i++) {
    freq[t.charCodeAt(i) - "A".charCodeAt(0)]--;
  }

  for (let i = 0; i < 26; i++) {
    if (freq[i] != 0) {
      return false;
    }
  }
  return true;
}
