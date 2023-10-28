let s = "egg",
  t = "add";
console.log("ans: ", isIsomorphic(s, t));

function isIsomorphic(s, t) {
  if (s.length !== t.length) return false;

  const mpp = new Map();

  for (let i = 0; i < s.length; i++) {
    const original = s[i];
    const replacement = t[i];
    if (!mpp.has(original)) {
      if (![...mpp.values()].includes(replacement)) {
        mpp.set(original, replacement);
      } else {
        return false;
      }
    } else {
      const mappedChar = mpp.get(original);
      if (mappedChar != replacement) {
        return false;
      }
    }
  }
  return true;
}
