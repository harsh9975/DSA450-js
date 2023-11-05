class StackNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(val) {
    if (this.size == 0) {
      this.top = new StackNode(val);
    } else {
      let newNode = new StackNode(val);
      newNode.next = this.top;
      this.top = newNode;
    }
    this.size++;
  }

  getTop() {
    if (this.size === 0) return null;
    return this.top.value;
  }

  pop() {
    if (this.size == 0) return null;
    let node = this.top;
    this.top = this.top.next;
    this.size--;
    return node.value;
  }
}

const stack = new Stack();
stack.push("a");
stack.push("b");
stack.push("c");
stack.push("d");

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.getTop());
