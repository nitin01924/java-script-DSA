function describeNumber(number) {
  if (number > 0) {
    return 'positive';
  }

  if (number < 0) {
    return 'negative';
  }

  return 'zero';
}

console.log(describeNumber(7));
console.log(describeNumber(-2));
console.log(describeNumber(0));

// Time: O(1) because at most three comparisons are made.
// Space: O(1) because no collection grows with input.
