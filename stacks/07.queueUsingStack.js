class Queue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(value) {
    this.stack1.push(value);
  }

  dequeue() {
    if (this.stack2.length == 0) {
      if (this.stack1.length == 0) {
        return null;
      }
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2.pop();
  }

  front() {
    if (this.stack2.length == 0) {
      if (this.stack1.length == 0) {
        return null;
      }
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2[this.stack2.length - 1];
  }

  isEmpty() {
    return this.stack1.length === 0 && this.stack2.length === 0;
  }

  size() {
    return this.stack1.length + this.stack2.length;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue()); // 1
console.log(queue.front()); // 2
console.log(queue.dequeue()); // 2
console.log(queue.isEmpty()); // false
console.log(queue.size()); // 1
