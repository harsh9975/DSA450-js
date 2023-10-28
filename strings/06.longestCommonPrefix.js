let strs = ["flower", "flow", "flight"];
let ans = longestCommonPrefix(strs);
console.log("ans: ", ans);

function longestCommonPrefix(strs) {
  if (strs.length == 0) {
    return "";
  }

  const reference = strs[0];

  for (let i = 0; i < reference.length; i++) {
    const char = reference[i];
    for (let j = 1; j < strs.length; j++) {
      if (i >= strs[j].length || strs[j][i] !== char) {
        return reference.slice(0, i);
      }
    }
  }
  return reference;
}
