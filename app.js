let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying",
];

function getRandomElement(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

function generateExcuse() {
  const randomWho = getRandomElement(who),
    randomAction = getRandomElement(action),
    randomWhat = getRandomElement(what),
    randomWhen = getRandomElement(when);
  return [randomWho, randomAction, randomWhat, randomWhen].join(" ") + ".";
}

console.log(generateExcuse());
