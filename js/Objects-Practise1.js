function createStudentProfile(name, age, grade) {
  // Return an object with name, age, and grade
  if (
    typeof name !== "string" ||
    typeof age !== "number" ||
    typeof grade !== "string" ||
    age <= 5 ||
    name === ""
  ) {
    return "Invalid Input";
  } else {
    return { name, age, grade };
  }
}

console.log(createStudentProfile("John", 15, "9th")); // {name: "John", age: 15, grade: "9th grade"}
console.log(createStudentProfile("Jane", 16, "10th")); // {name: "Jane", age: 16, grade: "10th grade"}
console.log(createStudentProfile("John", 2, "11th")); // "Invalid Input"

// You just need to implement the addCarColor function
let car = [
  {
    brand: "Toyota",
    model: "Corolla",
  },
  {
    brand: "Honda",
    model: "Civic",
  },
];

car.color = "Red";
console.log(car);
function addCarColor(car, color) {
  // Add color property to the car object
  if (typeof car !== "object" || car.brand === "" || car.model === "") {
    return "Invalid Input";
  } else if (color === "") {
    return "Invalid color";
  } else {
    car.color = color;
    return car;
  }
}

console.log(addCarColor(car, "Red")); // {brand: "Toyota", model: "Corolla", color: "Red"}
console.log(addCarColor(car, "")); // "Invalid color"

// You just need to implement the hasDiscount function
function hasDiscount(product) {
  // Check if product has discount property
  if (typeof product !== "object") {
    return "It is not an object";
  } else if (product.discount !== undefined) {
    return true;
  } else {
    return false;
  }
}

console.log(hasDiscount({ name: "Phone", price: 100, discount: 10 })); // true
console.log(hasDiscount({ name: "Phone", price: 100 })); // false

// You just need to implement the removePassword function
function removePassword(user) {
  // Remove password property
  if (typeof user !== "object") {
    return "It is not an object";
  } else if (user.password !== undefined) {
    delete user.password;
    return user;
  } else {
    return user;
  }
}

console.log(removePassword({ name: "John", age: 25, password: "12345" })); // {name: "John", age: 25}
console.log(removePassword({ name: "Jane", age: 22 })); // {name: "Jane", age: 22}

// You just need to implement the countProperties function

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

function countProperties(user) {
  // Return the number of properties in user
  if (typeof user !== "object") {
    return "It is not an object";
  } else if (user.isEmpty) {
    return 0;
  } else {
    return Object.keys(user).length;
  }
}

console.log(countProperties({ name: "John", age: 25 })); // 2
console.log(countProperties({ name: "Jane", age: 22, password: "12345" })); // 3
console.log(countProperties({})); // 0

// You just need to implement the mergeObjects function
function mergeObjects(obj1, obj2) {
  let result = { ...obj1, ...obj2 };
  // Merge obj1 and obj2 into a single object
  if (typeof obj1 !== "object" || typeof obj2 !== "object") {
    return "Invalid Input";
  } else if (obj1.isEmpty) {
    return obj2;
  } else if (obj2.isEmpty) {
    return obj1;
  } else if (obj1.isEmpty && obj2.isEmpty) {
    return {};
  } else if (obj1.keys === obj2.keys) {
    return result;
  } else {
    return "Error";
  }
}

console.log(mergeObjects({ name: "John" }, { age: 25 })); // {name: "John", age: 25}
console.log(mergeObjects({ name: "Jane" }, { age: 22, password: "12345" })); // {name: "Jane", age: 22, password: "12345"}
console.log(mergeObjects({ name: "John" }, { name: "Jane" })); // {name: "Jane"}
console.log(mergeObjects({ name: "John" }, { name: "John", age: 22 })); // {name: "Jane", age: 22}

// You just need to implement the objectToArray function
function objectToArray(obj) {
  // Convert the object into an array of key-value pairs
  if (typeof obj !== "object") {
    return "Invalid Object";
  } else if (obj.isEmpty) {
    return [];
  } else {
    return Object.entries(obj);
  }
}

console.log(objectToArray({ name: "John", age: 25 })); // [["name", "John"], ["age", 25]]
console.log(objectToArray({ name: "Jane", age: 22, password: "12345" })); // [["name", "Jane"], ["age", 22], ["password", "12345"]]
console.log(objectToArray({})); // []

// You just need to implement the cleanObject function
function cleanObject(obj) {
  // Remove all properties with null or undefined values
  return Object.fromEntries(
    Object.entries(obj).filter(
      ([key, value]) => value !== null && value !== undefined
    )
  );
}

console.log(cleanObject({ name: "John", age: 25, password: null })); // {name: "John", age: 25}
console.log(cleanObject({ name: "Jane", age: 22, password: "12345" })); // {name: "Jane", age: 22, password: "12345"}
console.log(cleanObject({ name: "John", age: 25, password: undefined })); // {name: "John", age: 25}

// You just need to implement the deepClone function
function deepClone(obj) {
  // Return a deep copy of obj
  return JSON.parse(JSON.stringify(obj));
}

console.log(deepClone({ name: "John", age: 25 })); // {name: "John", age: 25}
console.log(deepClone({ name: "Jane", age: 22, password: "12345" })); // {name: "Jane", age: 22, password: "12345"}
console.log(deepClone({ name: "John", age: 25, password: null })); // {name: "John", age: 25}
console.log(deepClone({ name: "John", age: 25, password: undefined })); // {name: "John", age: 25}

// You just need to implement the getNestedValue function
function getNestedValue(obj, keyPath) {
  // Return the value from the nested object based on keyPath
  return keyPath.split(".").reduce((acc, key) => acc[key], obj);
}

console.log(getNestedValue({ name: "John", age: 25 }, "name")); // "John"
console.log(
  getNestedValue(
    { name: "Jane", age: 22, address: { city: "New York" } },
    "address.city"
  )
); // "New York"
console.log(getNestedValue({ name: "John", age: 25 }, "age")); // 25
console.log(
  getNestedValue(
    { name: "Jane", age: 22, address: { city: "New York" } },
    "address"
  )
); // {city: "New York"}
