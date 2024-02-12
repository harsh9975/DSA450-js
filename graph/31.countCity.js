class Solution {
  findCity(n, m, edges, distanceThreshold) {
    let dist = Array.from({ length: n }, () => Array(n).fill(Number.MAX_VALUE));

    for (let i = 0; i < m; i++) {
      let [u, v, wt] = edges[i];
      dist[v][u] = dist[u][v] = wt;
    }

    for (let i = 0; i < n; i++) {
      dist[i][i] = 0;
    }

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        for (let k = 0; k < n; k++) {
          if (
            dist[j][i] != Number.MAX_VALUE &&
            dist[i][k] != Number.MAX_VALUE
          ) {
            dist[j][k] = Math.min(dist[j][k], dist[j][i] + dist[i][k]);
          }
        }
      }
    }

    let countCity = n;
    let cityNo = -1;

    for (let city = 0; city < n; city++) {
      let cnt = dist[city].filter(
        (distance) => distance <= distanceThreshold
      ).length;

      if (cnt <= countCity) {
        countCity = cnt;
        cityNo = city;
      }
    }

    return cityNo;
  }
}
