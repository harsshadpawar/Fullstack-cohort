const fruit = [1, 2, 3, 4, 5];
console.log(fruit[1]);
console.log(fruit[-1]);

var name1 = "Pawar";
let name = "HARSSHAD";
const pi = 3.14;
console.log(typeof name);
console.log(typeof pi);
console.log(typeof fruit);
console.log(typeof name1);

// Primitive Data Types:
let number = 42;
let text = "Hello";
let isTrue = true;
let nothing = null;
let nothing1 = undefined;

console.log(typeof number);
console.log(typeof text);
console.log(typeof isTrue);
console.log(typeof nothing);
console.log(typeof nothing1);
let SymbolVar = Symbol();
console.log(typeof SymbolVar);

// Non Primitives

let person = {
  name: "Harshad",
  age: 19,
  isStudent: true,
};

let num = "42";
let convertedNum = Number(num);
//let convertedNum = parseInt(num);
//let convertedNum = + num;
console.log(convertedNum);
console.log(typeof convertedNum);

let str = 123;
let convertedString = String(str);
console.log(convertedString);
console.log(typeof convertedString);

// Arithmatic Operations

let a = 10;
let b = 3;

let sum = a + b;
let difference = a - b;
let product = a * b;
let quotient = a / b;
let remainder = a % b;
let power = a ** b;

// Comparison Operators:

let x = 10;
let y = 10;

console.log(x == y);
console.log(x != y);
console.log(x > y);
console.log(x < y);
console.log(x <= y);

// JS Libraries to play with
// Math and DateTime

// NodeJS Libraries to play with
// crypto
// http

console.log(Math.max(1, 2, 3, 4, 5));
console.log(Math.min(1, 2, 3, 4, 5));
console.log(Math.random() * 10);
console.log(Math.floor(2.9));
console.log(Math.ceil(2.1));
console.log(Math.round(2.5));
console.log(Math.sqrt(9));

let firstName = "Harsshad";
let lastName = "Pawar";

let fullName = firstName + " " + lastName;
console.log(fullName);
console.log(fullName.length);
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(fullName[0]);
console.log(fullName.indexOf("Pawar"));
console.log(fullName.lastIndexOf("Pawar"));
console.log(fullName.slice(0, 7));
console.log(fullName.slice(8));

let greeting = `Hello ${fullName}, welcome to chai code!`;
console.log(greeting);

// Non Premitive Data Types

let chaiTypes = ["Masala Chai", "Ginger chai", "Green Tea", "Lemon Tea"];

console.log(chaiTypes);
console.log(chaiTypes[0]);
console.log(chaiTypes[1]);

console.log(`Total Chai Types ${chaiTypes.length}`);
chaiTypes.push("Black Tea"); // Add element at the end
console.log(chaiTypes);
const data = chaiTypes.pop(); // Remove element from the end
console.log(data);
let index = chaiTypes.indexOf("Green-Tea");
console.log(index);
if (index !== -1) {
  chaiTypes.splice(index, 1);
}

console.log(chaiTypes);

//callback function
chaiTypes.forEach((chai, index) => {
  console.log(`index of ${chai} is ${index + 1}`);
});

let moreChaiTypes = ["Ice Tea", "Bubble Tea", "Milk Tea"];
let allChaiTypes = chaiTypes.concat(moreChaiTypes);
console.log(allChaiTypes);
let newChaiTypes = [...chaiTypes, ...moreChaiTypes];
console.log(newChaiTypes);

// Object Literals
let chaiRecipe = {
  name2: "Masala Chai",
  ingredients: {
    teaLeaves: "Assam Tea",
    milk: "full cream",
    sugar: "as per taste",
    spices: ["Daalchini", "Ginger", "Elaichi"],
  },
  instructions: "Boil water, add tea leaves, milk, sugar and spices",
};

console.log(chaiRecipe.ingredients.spices[1]);

let updatesChaiRecipe = {
  ...chaiRecipe,
  name: "Ginger Chai",
  instructions: "Boil water, add tea leaves, milk, sugar and ginger with love",
};
console.log(updatesChaiRecipe);

let { name2, ingredients } = chaiRecipe; // object destructuring
let [firstChai, secondChai] = chaiTypes; // array destructuring

console.log(firstChai);
console.log(secondChai);

console.log(name2);
console.log(ingredients);

// Operations:

//if else

function prepareChai(chaiType) {
  if (chaiType === "Masala Chai") {
    return "Prepare Masala Chai";
  } else if (chaiType === "Ginger Chai") {
    return "Prepare Ginger Chai";
  } else {
    return "Prepare Green Tea";
  }
}

console.log(prepareChai("Masala Chai"));
console.log(prepareChai("Ginger Chai"));

function calculateTotal(amount) {
  // convert to number
  // amount = Number(amount);
  // if(amount >= 1000){
  //     return amount * 0.9;
  // }else{
  //      return amount;
  //}

  return amount > 1000 ? amount * 0.9 : amount;
}

let finalBill = calculateTotal(1000);
console.log(finalBill);
console.log(calculateTotal("111")); //argument

// control flow statement : Switch Statement

function trafficLight(color) {
  switch (color) {
    case "red":
      console.log("Stop");
      break;
    case "yellow":
      console.log("Slow down");
      break;
    case "green":
      console.log("Go");
      break;
    default:
      console.log("Chalan kaat do");
  }
}

trafficLight("yellow");

function checktruthyValue(value) {
  if (value) {
    console.log("Truthy");
  } else {
    console.log("Falsy");
  }
}

checktruthyValue(1); // Numbers other than 0 are truthy
checktruthyValue(0); // 0 is falsy
checktruthyValue("hitesh"); // Non-empty strings are truthy
checktruthyValue(""); // Empty string is falsy
checktruthyValue([]); // Empty array is truthy (this surprises many developers!)
checktruthyValue([1, 2, 3]); // Non-empty array is truthy
checktruthyValue({}); // Empty object is truthy
checktruthyValue({ key: "value" }); // Non-empty object is truthy
checktruthyValue(null); // null is falsy
checktruthyValue(undefined); // undefined is falsy
checktruthyValue(NaN); // NaN is falsy

function login(username, password) {
  if (username === "admin" && (password === "1234" || loginIP == "127")) {
    return "Login Successful";
  } else {
    return "Login Failed";
  }
}

let salesData = [
  { product: "Laptop", price: 1200 },
  { product: "Smartphone", price: 800 },
  { product: "Headphones", price: 150 },
  { product: "Keyboard", price: 80 },
];

// callback function if use {} we need to return

let initialValue = 0;
let totalSales = salesData.reduce(
  (acc, sale) => acc + sale.price,
  initialValue
);
console.log(totalSales);

// Items less than 50
let inventory = [
  { name: "Widget A", stock: 30 },
  { name: "Widget B", stock: 120 },
  { name: "Widget C", stock: 45 },
  { name: "Widget D", stock: 70 },
];

let lowStockItems = inventory.filter((item) => {
  return item.stock < 50;
});

console.log(lowStockItems);

let userActivity = [
  { user: "Alice", activityCount: 45 },
  { user: "Bob", activityCount: 12 },
  { user: "Charlie", activityCount: 33 },
];
// find most active user

let mostActiveUser = userActivity.reduce((maxUser, user) =>
  user.activityCount > maxUser.activityCount ? user : maxUser
);
console.log(mostActiveUser);

let expenses = [
  { description: "Groceries", amount: 50, category: "Food" },
  { description: "Electricity Bill", amount: 100, category: "Utilities" },
  { description: "Dinner", amount: 30, category: "Food" },
  { description: "Internet Bill", amount: 50, category: "Utilities" },
];

let expenseReport = expenses.reduce(
  (report, expense) => {
    //report[expense.category] += expense.amount;
    report[expense.category] = (report[expense.category] || 0) + expense.amount;
    return report;
  },
  { Food: 0, Utilities: 0 }
);

//[{"food":50},{"XYZ":120}]

console.log("Expense Report", expenseReport);

let tasks = [
  { description: "Write report", completed: false, priority: 2 },
  { description: "Send email", completed: true, priority: 3 },
  { description: "Prepare presentation", completed: false, priority: 1 },
];

// filter sort

let pendingSortedTask = tasks
  .filter((task) => !task.completed)
  .sort((a, b) => a.priority - b.priority);

console.log(pendingSortedTask);

let movieRatings = [
  { title: "Movie A", ratings: [4, 5, 3] },
  { title: "Movie B", ratings: [5, 5, 4] },
  { title: "Movie C", ratings: [3, 4, 2] },
];

let averageRatings = movieRatings.map((movie) => {
  let total = movie.ratings.reduce((sum, rating) => sum + rating, 0);
  let average = total / movie.ratings.length;
  return { title: movie.title, ratings: average.toFixed(2) };
});

//[{ title: "Movie A", ratings: [4, 5, 3]}]
console.log(averageRatings);
