function characterFrequency(text) {
  const counts = new Map();

  for (const character of text) {
    counts.set(character, (counts.get(character) ?? 0) + 1);
  }

  return counts;
}

function reverseString(text) {
  let reversed = '';

  for (let index = text.length - 1; index >= 0; index -= 1) {
    reversed += text[index];
  }

  return reversed;
}

console.log(characterFrequency('balloon'));
console.log(reverseString('algorithm'));

// Frequency counting and reversing both inspect each character: O(n) time.
// Frequency map space is O(k) for k distinct characters; reversed output is O(n).
