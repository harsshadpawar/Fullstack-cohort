console.log("Hi");
const data = fetch("https://api.freeapi.app/api/v1/public/randomproducts");
data.then(function () {
  console.log("Lo gi data agaya ");
});
data.catch(function () {
  console.log("Are Yaar! ");
});

data.finally(function () {
  console.log("Request Completed ");
});
console.log("Bye");
