function shinyDiamondRug(n) {
  let result = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i + j === n - 1 || i - j === 0 || i + j === 0 || i - j === n - 1) {
        result += "*";
      } else {
        result += " ";
      }
    }
    result += "\n";
  }
  return result;
}

console.log(shinyDiamondRug(3)); // "*"
