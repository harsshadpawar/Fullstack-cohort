function greet(name) {
  console.log(`Hello ${name}`);
}

greet("Harsshad");

let globalVar = "I am global";

function modifyGlobal() {
  globalVar = "I am modified";
  let blockedScopedVariable = "I am blocked Skoped";
  console.log(blockedScopedVariable);
}

modifyGlobal();
