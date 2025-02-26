function bmiCalculation() {
  try {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const result = weight / Math.pow(height / 100, 2);
    let message = result.toFixed(1);

    if (result < 18.5) {
      message += " Under Weight";
    } else if (result >= 18.5 && result <= 24.9) {
      message += " Normal Weight";
    } else if (result >= 25 && result <= 29.9) {
      message += " Over Weight";
    } else {
      message += " Obesity";
    }
    document.getElementById("bmiResult").value = message;
    return message;
  } catch (e) {
    return "Error : " + e.message;
  }
}
