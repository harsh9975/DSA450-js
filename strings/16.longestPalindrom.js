let s = "babad";
console.log(longestPalindromeOptimal(s));

//TC:O(n3) SC: O(1)
function longestPalindrome(s) {
  let n = s.length;
  let longest = "";
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j <= n; j++) {
      const substring = s.slice(i, j);
      if (isPalindrome(substring) && substring.length > longest.length) {
        longest = substring;
      }
    }
  }
  return longest;
}

function isPalindrome(str) {
  const n = str.length;
  for (let i = 0; i < Math.floor(n / 2); i++) {
    if (str[i] !== str[n - 1 - i]) {
      return false;
    }
  }
  return true;
}

function expandOverCenter(str, left, right) {
  let n = str.length;
  while (left >= 0 && right < n && str[left] == str[right]) {
    left--;
    right++;
  }
  return str.slice(left + 1, right);
}

function longestPalindromeOptimal(s) {
  const n = s.length;
  let maxPalindrome = "";
  for (let i = 0; i < n; i++) {
    const palindrom1 = expandOverCenter(s, i, i);
    const palindrom2 = expandOverCenter(s, i, i + 1);
    // console.log("palindrom1", palindrom1);
    // console.log("palindrom2", palindrom2);
    if (palindrom1.length > maxPalindrome.length) {
      maxPalindrome = palindrom1;
    }
    if (palindrom2.length > maxPalindrome.length) {
      maxPalindrome = palindrom2;
    }
  }
  return maxPalindrome;
}
