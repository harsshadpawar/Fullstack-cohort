console.log("Hi");

setTimeout(function timrfnc() {
  console.log("Hello after 0 sec");
}, 0);
Promise.resolve().then(function P1() {
  return console.log("Promise Resolv Hogaya P1");
});
console.log("Bye!");
setTimeout(function timeOut() {
  return console.log("Hello after 0 sec");
});

Promise.resolve().then(function P2() {
  console.log("Promise Resolv Hogaya P2");
});
