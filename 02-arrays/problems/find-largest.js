// # Find the Largest Value
//
// ## Problem
// Return the largest number in a non-empty array without Math.max(...array).
// Example: [7, 2, 11, 4] -> 11
//
// ## Understanding the Problem
// Negative values matter, so starting `largest` at 0 would be wrong for an
// all-negative input.
//
// ## Try It Yourself
function findLargestTryItYourself(array) {
  // TODO: Write a one-pass solution here.
}

// ## Reference Solution
function findLargest(array) {
  if (array.length === 0) {
    return undefined;
  }

  let largest = array[0];

  for (let index = 1; index < array.length; index += 1) {
    if (array[index] > largest) {
      largest = array[index];
    }
  }

  return largest;
}

// ## Explanation
// Treat the first value as the best answer seen so far. Each later value either
// replaces it or does not. Time: O(n) for one traversal. Space: O(1), since
// `largest` does not grow with the input. Empty input returns undefined.
// Common mistake: initialize to 0, which fails for [-8, -3, -20].

function runTest(input, expected) {
  console.log({ input, expected, actual: findLargest(input) });
}

runTest([7, 2, 11, 4], 11);
runTest([-8, -3, -20], -3);
runTest([5], 5);
runTest([], undefined);
