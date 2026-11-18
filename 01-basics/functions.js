function isEven(number) {
  return number % 2 === 0;
}

function findSquare(number) {
  return number * number;
}

console.log(isEven(8));
console.log(findSquare(5));

// Each function performs a fixed amount of work.
// Time: O(1), Space: O(1).
