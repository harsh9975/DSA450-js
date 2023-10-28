let s = "tree";
console.log("ans: ", freqSort(s));
function freqSort(s) {
  let map = new Map();
  let str = "";

  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], 1);
    } else {
      map.set(s[i], map.get(s[i]) + 1);
    }
  }
  const newMap = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
  for (let [i, j] of newMap) {
    str += i.repeat(j);
  }
  return str;
}
