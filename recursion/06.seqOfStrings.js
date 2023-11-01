let str = "abc";
let ans = [];
getAllSubsequence(0, str, ans, "");
console.log("ans: ", ans);

function getAllSubsequence(i, str, ans, current) {
  if (i == str.length) {
    ans.push(current);
    return;
  }
  getAllSubsequence(i + 1, str, ans, current + str[i]);
  getAllSubsequence(i + 1, str, ans, current);
}
