console.log("Hello, World!");

foodList = [];
unHealthyList = ["burger"];
function filterHealthy(foodList) {
  // Remove unhealthy food and return updated list
  for (var i = 0; i < foodList.length; i++) {
    if (unHealthyList.includes(foodList[i])) {
      foodList.splice(i, 1);
      i--;
    }
  }
  return foodList;
}

console.log(
  filterHealthy(["pizza", "burger", "fries", "apple", "banana", "carrot"])
); // ["apple", "banana", "carrot"]
console.log(filterHealthy(["pizza", "burger", "fries"])); // []
console.log(filterHealthy(["apple", "banana", "carrot"])); // ["apple", "banana", "carrot"]
console.log(filterHealthy([])); // []

function filterHealthy1(foodList) {
  // Remove unhealthy food and return updated list
  return foodList.filter((item) => item !== "Burger");
}

console.log(
  filterHealthy1(["pizza", "Burger", "fries", "apple", "banana", "carrot"])
);

function findPhone(items) {
  // Return the index of "Phone" in the items array
  return items.indexOf("Phone");
}

console.log(findPhone(["Pen", "Book", "Phone", "Tablet"])); // 2

function writeLoveLetter(message, name) {
  // Add name at the start of the message and return updated array
  if (Array.isArray(message)) {
    return [name, ...message];
  }
}
console.log(writeLoveLetter[(("I", "love", "you"), "John")]);

function addVIP(queue, vipGuest) {
  // Add vipGuest at the beginning of queue and return updated queue
  return [vipGuest, ...queue];
}

console.log(addVIP(["John", "Jane", "Alice"], "David")); // ["David", "John", "Jane", "Alice"]

// You just need to implement the countMovies function
function countMovies(movieList) {
  // Return the number of movies in the movieList
  return movieList.length;
}

console.log(
  countMovies(["Titanic", "The Godfather", "The Shawshank Redemption"])
); // 3
