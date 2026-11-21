# JavaScript Basics

## What is it?

The JavaScript building blocks used in every DSA solution: values, variables, conditions, loops, and functions.

## Why is it important?

DSA problems are easier when syntax does not get in the way of the algorithm.

## Core concepts

- `let` for values that change and `const` for bindings that do not.
- Primitive values, comparison operators, control flow, loops, and functions.
- Variables hold references for objects and arrays.

## Examples

```js
let total = 0;
for (let number = 1; number <= 3; number += 1) total += number;
```

## JavaScript notes

Use `===` instead of `==`. Array indexes start at `0`. Prefer `const` unless reassignment is needed.

## Time Complexity

A direct assignment or comparison is usually O(1). A loop that runs once per item is O(n).

## Space Complexity

Simple counters and variables use O(1) extra space; an array that grows with input uses O(n).

## Common mistakes

- Off-by-one loop limits.
- Accidentally using assignment (`=`) in a condition.
- Confusing `null`, `undefined`, and a missing array index.

## Important things to remember

Write the smallest correct example, run it, and predict its output before reading the console.

## Practice

Run the files in this folder one at a time, beginning with `variables.js` and `swapping.js`.

## Overview

These are the JavaScript tools that let an algorithm store state, make decisions, repeat work, and return a result. The goal is not to memorize syntax in isolation; it is to know what each construct means when reading or writing an algorithm.

## How it works

An algorithm normally follows this shape: receive input through parameters, store changing state in variables, use conditions to choose a path, use loops or recursion to repeat work, and return an output. A variable such as `largest` preserves knowledge from earlier loop iterations; a condition decides whether a new item changes that state.

## Important terminology

| Term | Meaning |
| --- | --- |
| Binding | A name associated with a value, such as `const count = 0` |
| Primitive | A value copied by value: number, string, boolean, `undefined`, `null`, bigint, symbol |
| Reference value | An object, array, function, `Map`, or `Set`; variables hold a reference to the same object |
| Scope | Where a name can be accessed; `let` and `const` are block-scoped |
| Parameter | A variable declared in a function definition |
| Return value | The result sent back by `return`; without it, a function returns `undefined` |

## Core operations

- Prefer `const` for a binding that will not be reassigned; use `let` when it must change. Avoid `var` in new code because its function scope is easier to misuse.
- `===` compares both type and value. `==` coerces types and can hide bugs.
- Arithmetic: `+`, `-`, `*`, `/`, `%`, `**`. The remainder operator is useful for parity: `number % 2 === 0`.
- Comparison: `>`, `<`, `>=`, `<=`, `===`, `!==`. Logical operators are `&&`, `||`, and `!`.
- Assignment includes `=`, `+=`, `-=`, `*=`, and `/=`. Use `index += 1` rather than relying on a hard-to-read update expression.
- `if`/`else if`/`else` select a path. `for` loops are often clearest when an index matters; `for...of` is clear when only values matter.

## JavaScript representation and references

```js
const original = [1, 2, 3];
const alias = original;
alias.push(4);
console.log(original); // [1, 2, 3, 4] — both names reference one array

const copy = [...original];
copy.push(5); // original is unchanged by this push
```

Spread makes a **shallow** copy. If an array contains objects, the nested objects are still shared. This distinction is essential when an algorithm promises not to mutate its input.

## Swapping values

| Approach | Idea | Strength | Limitation |
| --- | --- | --- | --- |
| Temporary variable | Save one value before overwriting it | Most universal and clearest | Uses one named extra variable |
| Arithmetic | `a = a + b; b = a - b; a = a - b` | Demonstrates value transformation | Only sensible for safe numeric values; less readable and can have numeric limits |
| Destructuring | `[a, b] = [b, a]` | Idiomatic, readable modern JavaScript | JavaScript-specific; creates a temporary array internally |

Use a temporary variable when teaching the fundamental idea, or destructuring in everyday modern JavaScript. Arithmetic swapping is a learning exercise, not the preferred default.

## Complexity

One assignment, comparison, or arithmetic operation is normally O(1). A loop over `n` items is O(n); two full nested loops are often O(n²). A function call is not automatically O(1)—analyze its body and any work it invokes.

## Advantages

- Clear control flow makes correctness easier to inspect.
- Functions isolate a reusable algorithm and make it testable.
- `const` and block scope reduce accidental changes.

## Disadvantages and common mistakes

- `const` prevents reassignment, not object mutation: `const values = []; values.push(1)` is valid.
- `typeof null` is historically `'object'`; use `value === null` when needed.
- `for...in` iterates property names and is usually not the right loop for arrays.
- Forgetting `return` makes a computed result unavailable to the caller.
- Updating the wrong variable or loop boundary causes off-by-one errors.

## Interview concepts and quick revision

Be able to explain pass-by-value precisely: JavaScript passes the value held by a variable; for objects that value is a reference. Prefer descriptive names (`left`, `right`, `current`, `count`), guard invalid inputs early, and trace at least an empty and single-item case.

## Files in this folder

`variables.js`, `data-types.js`, `operators.js`, `conditionals.js`, `loops.js`, and `functions.js` demonstrate the building blocks. `swapping.js` demonstrates temporary-variable and destructuring swaps; add the arithmetic version while studying it and compare readability.
