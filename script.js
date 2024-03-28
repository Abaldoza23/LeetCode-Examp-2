/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  const count = {}; // Object to store count of occurrences of each number
  let goodPairs = 0; // Variable to store the count of good pairs
  for (const num of nums) {
    if (count[num]) {
      count[num]++;
    } else {
      count[num] = 1;
    }
  }
  for (const key in count) {
    if (count[key] > 1) {
      goodPairs += (count[key] * (count[key] - 1)) / 2;
    }
  }
  return goodPairs;
};
