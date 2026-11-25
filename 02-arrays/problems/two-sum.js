// # Two Sum
//
// ## Problem
// Return indexes of two different values whose sum equals target.
// Example: values [11, 7, 15, 2], target 9 -> [1, 3]
//
// ## Approach
// While scanning left to right, save each earlier value's index. For current
// value x, look up whether target - x was already seen.
//
// ## Try It Yourself
function twoSumTryItYourself(values, target) {
  // TODO: Solve this without checking every pair.
}

// ## Reference Solution
function twoSum(values, target) {
  const indexByValue = new Map();

  for (let index = 0; index < values.length; index += 1) {
    const complement = target - values[index];

    if (indexByValue.has(complement)) {
      return [indexByValue.get(complement), index];
    }

    indexByValue.set(values[index], index);
  }

  return undefined;
}

// ## Explanation
// The map turns “have we seen the needed complement?” into average O(1) lookup.
// Time: O(n), one scan. Space: O(n), the map can hold each value.
// Edge cases: duplicate values can form an answer; return undefined if none exists.
// Alternative: sort plus two pointers, but then preserving original indexes takes work.

console.log(twoSum([11, 7, 15, 2], 9)); // [1, 3]
console.log(twoSum([3, 3], 6)); // [0, 1]
console.log(twoSum([1, 2, 3], 10)); // undefined
