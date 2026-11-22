const values = [10, 20, 40];

values.push(50); // Insert at the end.
values.splice(2, 0, 30); // At index 2: remove 0 items, insert 30.

console.log(values); // [10, 20, 30, 40, 50]

// push: O(1) amortized because it usually adds at the end.
// splice near the middle: O(n) because following elements may shift.
// Extra space: O(1), ignoring the array's own growth.
