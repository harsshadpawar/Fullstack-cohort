function gradesCalculator(grades) {
  if (grades >= 90) {
    console.log("A");
  } else if (grades >= 80 && grades < 90) {
    console.log("B");
  } else if (grades >= 70 && grades < 60) {
    console.log("C");
  } else if (grades >= 60 && grades < 70) {
    console.log("D");
  } else {
    console.log("F");
  }
}

gradesCalculator(62);
