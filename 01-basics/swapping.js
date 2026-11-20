// Swapping exchanges the values held by two variables.

let first = 10;
let second = 20;

console.log(`Before: first = ${first}, second = ${second}`);

// Swapping using a temporary variable is the clearest general approach.
const temporary = first;
first = second;
second = temporary;

console.log(`After temporary-variable swap: first = ${first}, second = ${second}`);

// Destructuring is a convenient JavaScript-specific alternative.
[first, second] = [second, first];
console.log(`After destructuring swap: first = ${first}, second = ${second}`);

// Arithmetic swapping is mainly a learning exercise. It only works for numbers
// and is less readable than a temporary variable or destructuring.
let arithmeticFirst = 10;
let arithmeticSecond = 20;
arithmeticFirst = arithmeticFirst + arithmeticSecond;
arithmeticSecond = arithmeticFirst - arithmeticSecond;
arithmeticFirst = arithmeticFirst - arithmeticSecond;
console.log(`After arithmetic swap: first = ${arithmeticFirst}, second = ${arithmeticSecond}`);

// Time: O(1) because a fixed number of assignments is made.
// Space: O(1) because the number of extra values does not grow with input.
