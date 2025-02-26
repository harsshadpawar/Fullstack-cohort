const person = {
  name: "John",
  age: 30,
  isAdult: true,
  hobbies: ["reading", "coding", "playing"],
  address: {
    city: "New York",
    street: "5th Avenuee",
  },
};

console.log(person);
console.log(person.hobbies[1]);
console.log(person.address.city);
console.log(person.address.xxyy);

const fname = "Harshad";
console.log(typeof fname);
let fname2 = fname;
fname2 = "John";
console.log(fname2);
console.log(fname);
console.log(typeof fname2);

// for objects

let p1 = {
  fname: "Harshad",
};

let p2 = p1;
p2.fname = "John P";

console.log(p1.fname);
console.log(p2.fname);

let p3 = {
  ...p1, // spread operator  but it dosent work on inner objects hence it is called shallow copy
};

console.log(p1.fname);
console.log(p3.fname);
p3.fname = "Raj";
console.log(p1.fname);
console.log(p3.fname);

function createStudentProfile(name, age, grade) {
  // Return an object with name, age, and grade
  if (age > 5) {
    const student = {
      name: name,
      age: age,
      grade: grade,
    };
    return student;
  } else {
    return "Invalid input";
  }
}

console.log(createStudentProfile("John", 16, "10th"));
console.log(createStudentProfile("Emma", 14, "8th"));
console.log(createStudentProfile("Mike", 5, "1st"));

let guestList = [];
function addGuest(guestList, newGuest) {
  // Add the newGuest to guestList and return the updated list
  guestList.push(newGuest);
  return guestList;
}

let candyJar = [];
function eatCandy(candyJar) {
  // Remove the last candy from the jar and return the updated jar
  candyJar.pop();
  return candyJar;
}

console.log(eatCandy(["Toffee", "Lollipop", "Chocolate", "Candy"]));

queuq = ["A", "B", "C"];
function addPuppy(queue, puppyName) {
  // Add puppyName at the beginning of queue and return updated queue
  queue.unshift(puppyName);
  return queue;
}

console.log(addPuppy(queuq, "D"));

bus = ["John", "Emma", "Mike"];
function removeStudent(bus) {
  // Remove the first student and return the updated bus list
  bus.shift();
  return bus;
}

console.log(removeStudent(bus));

books = ["Harry Potter", "The Alchemist", "The Da Vinci Code"];
function sortBooks(books) {
  // Sort the books alphabetically and return the updated list
  books.sort();
  return books;
}

console.log(sortBooks(books));
