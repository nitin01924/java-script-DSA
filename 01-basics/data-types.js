const numberOfProblems = 12; // number
const topicName = 'Arrays'; // string
const isStudyingToday = true; // boolean
let nextTopic; // undefined: no value assigned yet
const chosenLanguage = null; // null: intentionally no value
const profile = { name: 'Learner' }; // object
const topics = ['arrays', 'strings']; // array (a type of object)

console.log(typeof numberOfProblems, numberOfProblems);
console.log(typeof topicName, topicName);
console.log(typeof isStudyingToday, isStudyingToday);
console.log(typeof nextTopic, nextTopic);
console.log(typeof chosenLanguage, chosenLanguage);
console.log(typeof profile, profile);
console.log(Array.isArray(topics), topics);

// Time: O(1) for these fixed operations.
// Space: O(1) because the example stores a fixed amount of data.
