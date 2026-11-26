# Arrays

## What is it?

An array stores an ordered collection of values. Each value has an index starting at `0`.

## Why is it important?

Arrays are the most common input in beginner DSA problems and introduce traversal, indexing, and in-place updates.

## Core concepts

- Create, access, update, traverse, insert, and remove values.
- `length` is one more than the last valid index.
- Know whether an operation changes the original array.

## Examples

```js
const scores = [10, 20, 30];
console.log(scores[0]); // 10
```

## JavaScript notes

`push` and `pop` work at the end. `shift` and `unshift` move other elements. `slice` copies; `splice` changes the original array.

## Time Complexity

Index access is O(1). Traversal and linear search are O(n). Inserting or deleting near the beginning is O(n) because following items shift.

## Space Complexity

Traversal with a few variables uses O(1) extra space. Making a copy or result array generally uses O(n).

## Common mistakes

- Reading `array[array.length]` (it is past the end).
- Forgetting that `splice` mutates.
- Modifying an array while iterating without accounting for shifted indexes.

## Important things to remember

Always ask whether the problem allows mutation and whether input order matters.

## Practice

Study the operation files, then complete the starters in `problems/`.

## Overview

Arrays are ordered collections stored behind a single variable. They are the foundation for many DSA inputs because positions are identified by integer indexes and a loop can visit items predictably.

## How it works and terminology

For `const values = [8, 13, 21]`, the indexes are `0`, `1`, and `2`; `values.length` is `3`. The last valid index is `values.length - 1`. Arrays are objects in JavaScript and are mutable by default.

| Operation | Meaning | Typical cost | Why |
| --- | --- | --- | --- |
| Access | Read `values[index]` | O(1) | The runtime calculates the indexed location directly |
| Update | Assign `values[index] = value` | O(1) | One known position changes |
| Search | Find an unknown target | O(n) | It may be the last item or absent |
| Insert/delete at end | `push` / `pop` | O(1) amortized / O(1) | No existing indexes normally move |
| Insert/delete near front | `unshift`, `shift`, `splice` | O(n) | Later items must be reindexed |
| Traverse | Visit every item | O(n) | One visit per element |

Access is reading a known index. Search is finding an unknown index. Insertion creates room; deletion closes a gap. Do not use these words interchangeably when analyzing complexity.

## Core operations and examples

```js
const scores = [72, 88, 91];
const first = scores[0];       // access
scores[1] = 90;                // update
scores.push(95);               // insert at the end
const removed = scores.splice(1, 1); // delete one index; mutates scores

for (let index = 0; index < scores.length; index += 1) {
  console.log(index, scores[index]);
}
```

## JavaScript representation

Useful DSA methods: `push`, `pop`, `slice`, `splice`, `includes`, `indexOf`, `forEach`, `map`, `filter`, and `reduce`. Learn their mutation behavior:

- `push`, `pop`, `shift`, `unshift`, `splice`, `sort`, and `reverse` mutate the array.
- `slice`, `map`, `filter`, and `[...array]` return a new outer array.
- `const copy = [...values]` is shallow: nested objects remain shared.
- `values.sort()` sorts values as strings by default. For numbers use `values.sort((a, b) => a - b)`; the comparator returns a negative value when `a` should come first.

## Examples and patterns

Two pointers can reverse an array in place: start one pointer at each end, swap, then move inward. A running maximum solves “largest value” in one pass. A hash table can solve duplicate or two-sum questions by remembering values already seen. Use these patterns only after first understanding simple traversal.

## Complexity, advantages, and disadvantages

Arrays give excellent O(1) indexed access and cache-friendly sequential traversal. Their main disadvantage is O(n) middle/front insertions and deletions. A fixed number of counters is O(1) extra space; copying `n` values uses O(n) extra space.

## Common mistakes

- Reading `values[values.length]`, which is past the final element.
- Assuming `slice` mutates or forgetting that `splice` does.
- Calling numeric `sort()` without a comparator.
- Changing array length while a forward loop depends on it.
- Treating a shallow copy as a deep copy.

## Interview concepts, related algorithms, and quick revision

Common array questions use traversal, two pointers, prefix sums, sliding windows, sorting, hashing, and binary search. Before writing code, decide whether input must stay unchanged, whether duplicates matter, and whether the result needs indexes or values. Arrays are a good choice when order and indexed access matter; they are a poor fit for frequent arbitrary front/middle insertions.

## Files in this folder

`traversal.js`, `insertion.js`, `deletion.js`, and `searching.js` are operation references. `problems/` contains solved beginner problems and additional practice references.
