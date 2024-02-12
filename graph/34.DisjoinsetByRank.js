class Disjoint {
  constructor(n) {
    this.parent = new Array(n);
    this.rank = new Array(n).fill(0);
    this.size = new Array(n).fill(1);
    for (let i = 0; i < n; i++) {
      this.parent[i] = i;
    }
  }

  find(x) {
    if (this.parent[x] === x) {
      return x;
    }
    return (this.parent[x] = this.find(this.parent[x]));
  }

  unionByRank(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX === rootY) {
      return;
    }

    if (this.rank[rootX] < this.rank[rootY]) {
      this.parent[rootX] = rootY;
    } else if (this.rank[rootY] < this.rank[rootX]) {
      this.parent[rootY] = rootX;
    } else {
      this.parent[rootY] = rootX;
      this.rank[rootX]++;
    }
  }

  unionBySize(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX === rootY) {
      return;
    }

    if (this.size[rootX] < this.size[rootY]) {
      this.parent[rootX] = rootY;
      this.size[rootY] += this.size[rootX];
    } else {
      this.parent[rootY] = rootX;
      this.size[rootX] += this.size[rootY];
    }
  }
}

const ds = new Disjoint(7);
ds.unionBySize(1, 2);
ds.unionBySize(2, 3);
ds.unionBySize(4, 5);
ds.unionBySize(6, 7);
ds.unionBySize(5, 6);
ds.unionBySize(3, 7);

// console.log(ds.find(0));
// console.log(ds.find(1));
// console.log(ds.find(2));
console.log(ds.find(3));
console.log(ds.find(7));
// console.log(ds.find(4));
