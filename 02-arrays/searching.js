function findIndex(values, target) {
  for (let index = 0; index < values.length; index += 1) {
    if (values[index] === target) {
      return index;
    }
  }

  return -1;
}

const values = [8, 3, 5, 1];
console.log(findIndex(values, 5)); // 2
console.log(findIndex(values, 10)); // -1

// Time: O(n) because the target may be at the end or absent.
// Space: O(1) because only the loop index is added.
