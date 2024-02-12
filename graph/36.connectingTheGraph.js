class Solution {
  //Function to solve the given problem.
  Solve(n, adj) {
    //your code here
    const ds = new DisjointSet(n);
    let countExtra = 0;
    for (const [u, v] of adj) {
      if (ds.find(u) == ds.find(v)) {
        countExtra++;
      } else {
        ds.unionBySize(u, v);
      }
    }

    let countConnComp = 0;
    for (let i = 0; i < n; i++) {
      if (ds.parent[i] == i) countConnComp++;
    }

    let ans = countConnComp - 1;
    if (countExtra >= ans) {
      return ans;
    }
    return -1;
  }
}

class DisjointSet {
  constructor(n) {
    this.parent = new Array(n).fill().map((_, index) => index);
    this.rank = new Array(n).fill(0);
    this.size = new Array(n).fill(1);
  }

  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }

  unionByRank(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX === rootY) {
      return false;
    }

    if (this.rank[rootX] < this.rank[rootY]) {
      this.parent[rootX] = rootY;
    } else if (this.rank[rootY] < this.rank[rootX]) {
      this.parent[rootY] = rootX;
    } else {
      this.parent[rootY] = rootX;
      this.rank[rootX]++;
    }

    return true;
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
