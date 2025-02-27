function pataNahi(fn, delay) {
  console.log(arguments);

  let myId;
  return function () {
    myId = setTimeout(() => {}, delay);
  };
}

pataNahi("Harshad", 123);
