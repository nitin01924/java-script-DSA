// # Find the Second Largest Distinct Value
//
// ## Problem
// Return the second largest distinct number, or undefined when it does not exist.
// Example: [10, 5, 8, 10, 3] -> 8
//
// ## Approach
// Keep the largest and second-largest distinct values seen so far in one pass.
//
// ## Try It Yourself
function findSecondLargestTryItYourself(array) {
  // TODO: Handle duplicates and negative numbers.
}

// ## Reference Solution
function findSecondLargest(array) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (const value of array) {
    if (value > largest) {
      secondLargest = largest;
      largest = value;
    } else if (value > secondLargest && value !== largest) {
      secondLargest = value;
    }
  }

  return secondLargest === -Infinity ? undefined : secondLargest;
}

// ## Explanation
// A new largest pushes the old largest into second place. A value between the
// two replaces only second place. Time: O(n); space: O(1).
// Edge cases: duplicates are ignored; all-negative inputs work; fewer than two
// distinct values return undefined. Common mistake: forgetting value !== largest.

function runTest(input, expected) {
  console.log({ input, expected, actual: findSecondLargest(input) });
}

runTest([10, 5, 8, 10, 3], 8);
runTest([4, 4], undefined);
runTest([-1, -5, -2], -2);
runTest([], undefined);
