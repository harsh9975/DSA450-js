Array.prototype.myOwnReduce = function (callback, initialValue) {
  if (this.length == 0 && initialValue === undefined) {
    throw new TypeError("Reduce of empty array with no initial value");
  }

  let accumulator = initialValue != undefined ? initialValue : this[0];
  const startIndex = initialValue !== undefined ? 0 : 1;
  for (let i = 0; i < this.length; i++) {
    accumulator = callback(accumulator, this[i]);
  }
  return accumulator;
};

let arr = [1, 2, 3, 4, 5];

const sum = arr.myOwnReduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum);
