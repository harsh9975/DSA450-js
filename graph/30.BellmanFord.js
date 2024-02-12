class Solution {
  static bellmanFord(V, edges, S) {
    let dist = new Array(V).fill(Number.MAX_VALUE);
    dist[S] = 0;

    for (let i = 0; i < V - 1; i++) {
      for (let it of edges) {
        let u = it[0];
        let v = it[1];
        let wt = it[2];

        if (dist[u] !== Number.MAX_VALUE && dist[u] + wt < dist[v]) {
          dist[v] = dist[u] + wt;
        }
      }
    }

    for (let it of edges) {
      let u = it[0];
      let v = it[1];
      let wt = it[2];

      if (dist[u] !== Number.MAX_VALUE && dist[u] + wt < dist[v]) {
        return [-1];
      }
    }

    return dist;
  }
}
