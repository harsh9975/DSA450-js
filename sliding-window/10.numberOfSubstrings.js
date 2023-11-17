let s = "abcabc";
console.log(numberOfSubstrings(s));
function numberOfSubstrings(s) {
  const freq = { a: 0, b: 0, c: 0 };
  let n = s.length;
  let left = 0;
  let right = 0;
  let count = 0;
  let missing = 3;

  while (right < n) {
    if (++freq[s[right]] === 1) missing--;
    while (missing === 0) {
      count += s.length - right;
      if (--freq[s[left++]] === 0) {
        missing++;
      }
    }
    right++;
  }
  return count;
}
