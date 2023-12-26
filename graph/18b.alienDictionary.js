class Solution {
  findOrder(dict, N, K) {
    const adj = new Array(K).fill(null).map(() => []);

    for (let i = 0; i < N - 1; i++) {
      const s1 = dict[i];
      const s2 = dict[i + 1];
      const len = Math.min(s1.length, s2.length);

      for (let ptr = 0; ptr < len; ptr++) {
        if (s1.charAt(ptr) !== s2.charAt(ptr)) {
          adj[s1.charCodeAt(ptr) - "a".charCodeAt(0)].push(
            s2.charCodeAt(ptr) - "a".charCodeAt(0)
          );
          break;
        }
      }
    }

    const topo = this.topoSort(K, adj);
    let ans = "";
    for (const it of topo) {
      ans += String.fromCharCode(it + "a".charCodeAt(0));
    }

    return ans;
  }

  topoSort(V, adj) {
    const indegree = new Array(V).fill(0);

    // Calculate in-degree for each vertex
    for (let i = 0; i < V; i++) {
      for (const it of adj[i]) {
        indegree[it]++;
      }
    }

    const queue = [];
    for (let i = 0; i < V; i++) {
      if (indegree[i] === 0) {
        queue.push(i);
      }
    }

    const topo = [];
    while (queue.length > 0) {
      const node = queue.shift();
      topo.push(node);

      for (const it of adj[node]) {
        indegree[it]--;
        if (indegree[it] === 0) {
          queue.push(it);
        }
      }
    }

    return topo;
  }
}
