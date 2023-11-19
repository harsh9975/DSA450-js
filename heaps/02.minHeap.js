class BinaryHeap {
  constructor() {
    this.list = [];
  }

  minHeapify(arr, n, i) {
    let smallest = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;
    if (l < n && arr[l] < arr[smallest]) {
      smallest = l;
    }
    if (r < n && arr[r] < arr[smallest]) {
      smallest = r;
    }

    if (smallest != i) {
      let temp = arr[i];
      arr[i] = arr[smallest];
      arr[smallest] = temp;
      this.minHeapify(arr, n, smallest);
    }
  }

  insert(num) {
    const size = this.list.length;
    if (size == 0) {
      this.list.push(num);
    } else {
      this.list.push(num);
      for (let i = parseInt(this.list.length / 2 - 1); i >= 0; i--) {
        this.minHeapify(this.list, this.list.length, i);
      }
    }
  }

  delete(num) {
    let size = this.list.length;
    let i = 0;
    for (i = 0; i < size; i++) {
      if (this.list[i] == num) {
        break;
      }
    }

    [this.list[i], this.list[size - 1]] = [this.list[size - 1], this.list[i]];
    this.list.splice(size - 1);
    for (let i = parseInt(this.list.length / 2 - 1); i >= 0; i--) {
      this.minHeapify(this.list, this.list.length, i);
    }
  }

  findMax = () => {
    return this.list[0];
  };

  deleteMax = () => {
    return this.delete(this.list[0]);
  };

  size = () => {
    return this.list.length;
  };

  isEmpty = () => {
    return list.length === 0;
  };

  getList = () => {
    return this.list;
  };
}

const heap = new BinaryHeap();
heap.insert(3);
heap.insert(4);
heap.insert(9);
heap.insert(5);
heap.insert(2);

console.log(heap.getList());

heap.delete(9);
console.log(heap.getList());

heap.insert(7);
console.log(heap.getList());
