const who = ["The dog", "My grandma", "The mailman", "My bird"];
const action = ["ate", "peed", "crushed", "broke"];
const what = ["my homework", "my phone", "the car"];
const when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying",
];

function getRandomElement(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function generateExcuse() {
  const sentenceParts  = [];
  const partsArrays  = [who,action,what,when];
  partsArrays.forEach(partList  => {
          sentenceParts.push(getRandomElement(partList ));
        });
  return sentenceParts.join(" ") + ".";
}

console.log(generateExcuse());
