# JavaScript DSA

This repository is a personal textbook, code reference, and learning curriculum for Data Structures and Algorithms (DSA) with modern JavaScript and Node.js. It is intentionally not an application: the goal is to understand how common data structures and algorithms work, rewrite them from memory, test them, and use them to solve problems.

## What is DSA?

**Data** is the information a program works with: numbers, words, users, routes, and more. A **data structure** is a way of organizing that data so particular operations are efficient. An array, for example, is excellent for direct indexed access; a queue is excellent when the first item added must leave first.

An **algorithm** is a precise sequence of steps for solving a problem. Searching a list, sorting scores, finding a shortest route, and comparing strings are algorithms. DSA connects the two questions that matter in real programs: *how should the data be represented?* and *what steps should process it?*

Programmers study DSA to reason about correctness, predict performance as input grows, select practical tools, understand built-in features, and communicate solutions clearly in interviews and design discussions.

## Why learn DSA?

- **Problem solving:** Break a vague task into inputs, outputs, constraints, and repeatable steps.
- **Algorithmic thinking:** Learn to recognize patterns instead of starting every problem from zero.
- **Efficiency:** Avoid code that is fine for ten items but unusable for millions.
- **Scalable software:** Understand why caches, queues, indexes, maps, and traversals appear in real systems.
- **Technical interviews:** Explain a correct solution and its trade-offs with confidence.
- **Software internals:** See the ideas behind JavaScript arrays, `Map`, `Set`, recursion, sorting, and graph-like networks.

## Data structures vs. algorithms

A data structure is the *container and organization* of information. Examples: an array, linked list, stack, tree, or graph. An algorithm is the *procedure* that reads or changes information. Examples: binary search, merge sort, breadth-first search, or dynamic programming.

They are usually chosen together. Binary search is effective with sorted indexable data; BFS uses a queue; frequency counting uses a hash table; inorder traversal uses a tree.

## Major categories of DSA

### Data structures

- **Arrays and strings:** Ordered, indexable sequences. They introduce traversal, indexing, copying, and two-pointer ideas.
- **Linked lists:** Nodes joined by references. They make link changes visible and trade fast indexing for flexible insertion.
- **Stacks and queues:** Restricted-access collections: last-in-first-out and first-in-first-out.
- **Hash tables:** Key-to-value storage for fast average-case lookup, membership, and frequency counting.
- **Trees and heaps:** Hierarchies. Binary search trees organize ordered values; heaps repeatedly access a minimum or maximum.
- **Graphs:** Nodes and connections for routes, dependencies, networks, and relationships.
- **Tries:** Prefix trees for words and autocomplete; useful after tree fundamentals are comfortable.

### Algorithms and techniques

- **Searching and sorting:** Find values or put values in order.
- **Recursion and divide-and-conquer:** Solve a smaller version of a problem, often splitting work into parts.
- **Greedy algorithms:** Make the best local choice when that can be proven to lead to a global solution.
- **Backtracking:** Explore choices, undo a choice, and try another path.
- **Dynamic programming:** Save answers to repeated subproblems instead of recomputing them.
- **Tree and graph algorithms:** Traverse, search, find paths, order dependencies, or optimize a network.

## Big-O complexity

Big-O describes how an algorithm's work grows as input size `n` grows. It is not a stopwatch: hardware, constants, and implementation details still matter. It is a useful growth-rate model for comparing approaches.

| Complexity | Intuition | Small JavaScript example |
| --- | --- | --- |
| O(1) | Same amount of work regardless of `n` | `values[0]`, updating a counter |
| O(log n) | Repeatedly cut the remaining work in half | binary search on sorted values |
| O(n) | Visit each item once | one loop through an array |
| O(n log n) | Divide work and process each level | merge sort |
| O(n²) | Compare many pairs | nested loops, basic sorts |
| O(2ⁿ) | Branch into roughly two choices per item | naive recursive Fibonacci/subsets |
| O(n!) | Try every ordering | brute-force permutations |

For example, this is O(n), because its loop may run once per element:

```js
for (const value of values) {
  if (value === target) return true;
}
```

Nested loops are often O(n²), but inspect what each loop actually does. A loop inside another loop is not automatically O(n²) if one pointer only moves forward across the whole algorithm.

## Time complexity vs. space complexity

**Time complexity** describes the amount of work. **Space complexity** describes additional memory needed as input grows. Binary search is O(log n) time and O(1) extra space in its iterative form. A function that makes a reversed copy of an array can be O(n) time and O(n) extra space.

Always say why: “O(n) time because every character can be examined once; O(1) extra space because only counters are stored.” Input storage itself is normally not counted as extra space unless an algorithm creates a copy.

## Common DSA patterns

| Pattern | Main idea | Start here |
| --- | --- | --- |
| Two pointers | Move two indexes through a sequence | Arrays, strings |
| Sliding window | Maintain a moving contiguous range | Arrays, strings |
| Fast and slow pointers | Move at different speeds to find a middle/cycle | Linked lists |
| Prefix sum | Precompute running totals for fast range queries | Arrays |
| Hashing | Trade memory for fast lookup/counting | Hash tables |
| Binary search | Eliminate half of ordered search space | Searching |
| Recursion / divide and conquer | Reduce or split the problem | Recursion, sorting, trees |
| Greedy | Choose the best justified local option | Later extensions |
| Backtracking | Explore and undo choices | After recursion |
| Dynamic programming | Cache overlapping subproblems | Dynamic programming |
| BFS / DFS | Systematically traverse a graph or tree | Graphs, trees |

## How this repository is organized

Folders are numbered in prerequisite order. Each topic contains a detailed revision README, small runnable reference implementations, and solved problems whose **Try It Yourself** section appears before the clearly separated reference solution. Read a file, hide the solution, write your own, and then compare the reasoning—not just the output.

Run any reference from the repository root:

```bash
node 04-searching/binary-search.js
```

Node.js is the only requirement. No browser, package manager, frontend, or external package is needed.

## Learning method

The files are reference material; their existence is not evidence that a topic has been learned. The intended cycle is:

**Understand → Rewrite → Test → Explain → Analyze complexity → Practice → Commit**

Use Git commits only for concepts personally studied and understood. It is normal to rewrite or replace code as understanding improves.

## DSA roadmap

1. JavaScript essentials for DSA
2. Arrays and strings
3. Searching and sorting
4. Recursion
5. Linked lists, stacks, queues, and hash tables
6. Trees and graphs
7. Dynamic programming
8. Later extensions: heaps, tries, greedy algorithms, backtracking, union-find, and advanced graph algorithms

Some relationships matter: binary search needs ordered data; merge/quick sort use recursion and divide-and-conquer; tree traversals use recursion or queues; BFS needs a queue; dynamic programming starts with recursive recurrences.

## Progress checklist

- [ ] 01. JavaScript basics
- [ ] 02. Arrays
- [ ] 03. Strings
- [ ] 04. Searching
- [ ] 05. Sorting
- [ ] 06. Recursion
- [ ] 07. Linked lists
- [ ] 08. Stacks
- [ ] 09. Queues
- [ ] 10. Hash tables
- [ ] 11. Trees and heaps
- [ ] 12. Graphs
- [ ] 13. Dynamic programming

## Revision habits

- State the input, output, constraints, and edge cases before coding.
- Start with a correct simple approach; optimize only when needed.
- Trace a small example on paper and predict the output before running it.
- Distinguish mutation from copying, especially with arrays and objects.
- Use strict equality (`===`) and a numeric comparator with `array.sort((a, b) => a - b)`.
- Prefer an explanation you can defend over a clever one-liner you cannot.
