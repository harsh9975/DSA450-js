let s = "(1+(2*3)+((8)/4))+1";
console.log(maxDepth(s));

function maxDepth(s) {
  let maxDepth = 0;
  let currDept = 0;

  for (let i = 0; i < s.length; i++) {
    let ch = s[i];
    if (ch == "(") {
      currDept++;
      maxDepth = Math.max(maxDepth, currDept);
    } else if (ch == ")") {
      currDept--;
    }
  }
  return maxDepth;
}
