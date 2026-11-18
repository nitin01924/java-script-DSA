const numbers = [3, 6, 9, 12];
let sum = 0;

for (let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
}

console.log(`Sum: ${sum}`);

// This visits each array element once.
// Time: O(n), where n is numbers.length.
// Space: O(1) extra space because sum and index do not grow with n.
