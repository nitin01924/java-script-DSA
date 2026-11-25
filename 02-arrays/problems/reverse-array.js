// # Reverse an Array
//
// ## Problem
// Return a new array in reverse order without using Array.prototype.reverse().
// Example: [14, 6, 29, 8] -> [8, 29, 6, 14]
//
// ## Why it matters
// This introduces reverse traversal and the difference between returning a copy
// and changing the caller's array.
//
// ## Try It Yourself
function reverseArrayTryItYourself(array) {
  // TODO: Write your solution here before reading the reference below.
}

// ## Reference Solution
function reverseArray(array) {
  const reversed = [];

  for (let index = array.length - 1; index >= 0; index -= 1) {
    reversed.push(array[index]);
  }

  return reversed;
}

// ## Explanation
// Start at the final valid index and move left. Pushing each visited item onto a
// new array produces the opposite order without mutating the input.
// Time: O(n), because every item is copied once.
// Space: O(n), because the returned array contains n items.
// Edge cases: an empty array returns []; a one-item array is unchanged.
// Common mistake: starting at array.length instead of array.length - 1.

function runTest(input, expected) {
  const actual = reverseArray(input);
  console.log({ input, expected, actual, passed: JSON.stringify(actual) === JSON.stringify(expected) });
}

runTest([14, 6, 29, 8], [8, 29, 6, 14]);
runTest([], []);
runTest([42], [42]);
