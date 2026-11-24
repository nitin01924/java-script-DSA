function printValues(values) {
  for (let index = 0; index < values.length; index += 1) {
    console.log(`Index ${index}: ${values[index]}`);
  }
}

const values = [10, 20, 30, 40];
printValues(values);

// Time: O(n) because every array item is visited once.
// Space: O(1) extra space because only index is used while traversing.
