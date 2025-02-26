// Problem: Create an array containing different types of teas.
const teas = [
  "Green tea",
  "Black tea",
  "oolong tea",
  "White tea",
  "Herbal Tea",
];
console.log(teas);

// Problem: Add "Chamomile Tea" to the existing list of teas
teas.push("Chamomile Tea");
console.log(teas);
//Problem: Remove "Oolong Tea" from the list of teas.
//teas.splice(2, 1);
const index = teas.indexOf("oolong tea");
if (index > -1) {
  teas.splice(index, 1);
}

console.log(teas);
// Problem: Filter the list to only include teas that are caffeinated.
const caffinated = teas.filter((tea) => tea !== "Herbal Tea");

// Problem: Sort the list of teas in alphabetical order.
const test = teas.sort();
console.log(test);
// Problem: Use a for loop to print each type of tea in the array.

for (let i = 0; i < teas.length; i++) {
  console.log(teas[i]);
}
// Problem: Use a for loop to count how many teas are caffeinated (excluding "Herbal Tea").
let caffinatedmyTeas = 0;
for (let j = 0; j < teas.length; j++) {
  if (teas[j] !== "Herbal Tea") {
    caffinatedmyTeas++;
  }
}
console.log(caffinatedmyTeas);
// Problem: Use a for loop to create a new array with all tea names in uppercase.
const upperCaseTeas = [];
for (let k = 0; k < teas.length; k++) {
  upperCaseTeas.push(teas[k].toUpperCase());
}
console.log(upperCaseTeas);
// Problem: Use a for loop to find the tea name with the most characters.
let longestTea = "";
for (let l = 0; l < teas.length; l++) {
  if (teas[l].length > longestTea.length) {
    longestTea = teas[l];
  }
}
console.log(longestTea);

// Problem: Use a for loop to reverse the order of teas in the array.
const reversedTeas = [];
for (let m = teas.length - 1; m >= 0; m--) {
  reversedTeas.push(teas[m]);
}
console.log(reversedTeas);
