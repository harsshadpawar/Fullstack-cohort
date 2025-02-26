let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let anotherArray = [];

function sumFactors(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  return sum;
}

let result = sumFactors(myArray); // 55

console.log(result);
