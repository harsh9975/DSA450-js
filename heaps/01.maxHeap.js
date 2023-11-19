class BinaryHeap {
  constructor() {
    this.list = [];
  }

  maxHeapify(arr, n, i) {
    let largest = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;
    if (l < n && arr[l] > arr[largest]) {
      largest = l;
    }
    if (r < n && arr[r] > arr[largest]) {
      largest = r;
    }

    if (largest != i) {
      let temp = arr[i];
      arr[i] = arr[largest];
      arr[largest] = temp;
      this.maxHeapify(arr, n, largest);
    }
  }

  insert(num) {
    const size = this.list.length;
    if (size == 0) {
      this.list.push(num);
    } else {
      this.list.push(num);
      for (let i = parseInt(this.list.length / 2 - 1); i >= 0; i--) {
        this.maxHeapify(this.list, this.list.length, i);
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
      this.maxHeapify(this.list, this.list.length, i);
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
