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

class Solution {
  spanningTree(arr, v, e) {
    // Step 1: Sort the edges by weight
    arr.sort((a, b) => a[2] - b[2]);

    // Step 2: Initialize disjoint set
    const disjointSet = new DisjointSet(v);

    // Step 3: Initialize total weight of MST
    let totalWeight = 0;

    // Step 4: Iterate through sorted edges
    for (const [u, v, weight] of arr) {
      if (disjointSet.unionBySize(u, v)) {
        // If adding the edge doesn't form a cycle, add its weight to total
        totalWeight += parseInt(weight);
      }
    }

    // Step 5: Return total weight of MST
    return totalWeight;
  }
}
