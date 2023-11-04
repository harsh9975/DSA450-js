let s = "aabb";
console.log(palindromPartition(s));

function palindromPartition(s) {
  let ans = [];
  backtrack(0, s, ans, []);
  return ans;
}

function backtrack(index, s, ans, ds) {
  if (index === s.length) {
    ans.push([...ds]);
    return;
  }

  for (let i = index; i < s.length; i++) {
    if (isPalindrome(s, index, i)) {
      ds.push(s.substring(index, i + 1));
      backtrack(i + 1, s, ans, ds);
      ds.pop();
    }
  }
}

function isPalindrome(s, start, end) {
  while (start < end) {
    if (s[start++] !== s[end--]) {
      return false;
    }
  }
  return true;
}
