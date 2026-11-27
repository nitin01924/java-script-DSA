function countVowels(text) {
  const vowels = 'aeiou';
  let count = 0;

  for (const character of text.toLowerCase()) {
    if (vowels.includes(character)) {
      count += 1;
    }
  }

  return count;
}

console.log(countVowels('JavaScript')); // 3

// Time: O(n) because each character is checked once.
// Space: O(n) here because toLowerCase creates a normalized string.
