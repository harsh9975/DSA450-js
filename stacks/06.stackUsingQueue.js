class Stack {
  constructor() {
    this.queue1 = [];
    this.queue2 = [];
  }

  push(value) {
    this.queue1.push(value);
  }

  pop() {
    if (this.queue1.length == 0) return null;
    while (this.queue1.length > 1) {
      this.queue2.push(this.queue1.shift());
    }
    const poppedItem = this.queue1.shift();
    const temp = this.queue1;
    this.queue1 = this.queue2;
    this.queue2 = temp;
    return poppedItem;
  }

  top() {
    if (this.queue1.length == 0) return null;
    while (this.queue1.length > 1) {
      this.queue2.push(this.queue1.shift());
    }

    const topItem = this.queue1.shift();
    this.queue2.push(topItem);

    const temp = this.queue1;
    this.queue1 = this.queue2;
    this.queue2 = temp;

    return topItem;
  }

  isEmpty() {
    return this.queue1.length === 0;
  }

  size() {
    return this.queue1.length;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.pop()); // 3
console.log(stack.top()); // 2
console.log(stack.pop()); // 2
console.log(stack.isEmpty()); // false
console.log(stack.size()); // 1
