const word = 'algorithm';

console.log('Length:', word.length);
console.log('First character:', word[0]);
console.log('Last character:', word[word.length - 1]);
console.log('Uppercase:', word.toUpperCase());

// Strings cannot be changed in place; toUpperCase returns a new string.
// Time: O(n) for toUpperCase because it reads each character.
// Space: O(n) for the new uppercase string.
