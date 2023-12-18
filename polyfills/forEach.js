Array.prototype.myForEach = function (callback, index) {
  for (let i = 0; i < this.length; i++) {
    index = i;
    callback(this[i], index);
  }
};

const arr = [1, 2, 3, 4, 5];

arr.myForEach((element, index) => {
  console.log(`Element at index ${index}: ${element}`);
});
