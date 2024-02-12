class Solution {
  //Function to find the maximum number of meetings that can
  //be performed in a meeting room.
  maxMeetings(start, end, n) {
    // code here
    const meetings = start
      .map((value, index) => [value, end[index]])
      .sort((a, b) => a[1] - b[1]);

    let maxMeetings = 0;
    let prevEndTime = 0;

    for (const [startTime, endTime] of meetings) {
      if (startTime > prevEndTime) {
        maxMeetings++;
        prevEndTime = endTime;
      }
    }

    return maxMeetings;
  }
}
