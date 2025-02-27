function changeBackground(color) {
  document.body.style.backgroundColor = color;
}

const themeBtn = document.getElementById("theme-Btn-Mode");
themeBtn.addEventListener("click", () => {
  const currentColor = document.body.style.backgroundColor;
  console.log(currentColor);

  if (!currentColor || currentColor === "white") {
    themeBtn.innerText = "White";
    changeBackground("black");
  } else {
    themeBtn.innerText = "Black";
    changeBackground("white");
  }
});
