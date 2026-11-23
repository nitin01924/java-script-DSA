const values = [10, 20, 30, 40, 50];

const removedLast = values.pop(); // Removes 50.
const removedMiddle = values.splice(1, 1); // Removes one item at index 1.

console.log('Remaining:', values);
console.log('Removed last:', removedLast);
console.log('Removed middle:', removedMiddle[0]);

// pop: O(1) because it removes the last element.
// splice from the middle: O(n) because later elements can shift left.
// Extra space: O(1), apart from the small returned array from splice.
