let str = "aabab",
  k = 2;
console.log("ans: ", countSubstringsWithKDistinctCharsOptimal(str, k));

function countSubstringsWithKDistinctCharsBruteForce(str, k) {
  let n = str.length;
  let count = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      const substring = str.slice(i, j + 1);
      const distnictChar = new Set(substring);
      if (distnictChar.size === k) {
        count++;
      }
    }
  }
  return count;
}

function most_k_chars(s, k) {
  if (!s) {
    return 0;
  }
  const char_count = {};
  let num = 0;
  let left = 0;

  for (let i = 0; i < s.length; i++) {
    char_count[s[i]] = (char_count[s[i]] || 0) + 1;
    while (Object.keys(char_count).length > k) {
      char_count[s[left]] -= 1;
      if (char_count[s[left]] === 0) {
        delete char_count[s[left]];
      }
      left += 1;
    }
    num += i - left + 1;
  }
  return num;
}

function countSubstringsWithKDistinctCharsOptimal(str, k) {
  return most_k_chars(str, k) - most_k_chars(str, k - 1);
}
