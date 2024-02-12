class Solution {
  //Function to find the maximum profit and the number of jobs done.
  JobScheduling(arr, n) {
    // Step 1: Sort the jobs based on profits in descending order
    arr.sort((a, b) => b.profit - a.profit);

    // Step 2: Initialize an array to track whether a deadline has been used
    const result = new Array(n).fill(false);

    let maxProfit = 0;
    let jobCount = 0;

    // Step 3: Iterate through sorted jobs
    for (const job of arr) {
      const deadline = job.dead - 1; // Adjust deadline to 0-based indexing
      // Find the nearest available slot (a slot with false value)
      for (let i = deadline; i >= 0; i--) {
        if (!result[i]) {
          result[i] = true; // Mark slot as used
          maxProfit += job.profit; // Add profit to total profit
          jobCount++; // Increment job count
          break;
        }
      }
    }

    // Step 4: Return the count of jobs and the maximum profit
    return [jobCount, maxProfit];
  }
}
