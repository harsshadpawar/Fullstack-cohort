//get reference to DOM elements
const inputBox = document.getElementById("inputBox");
const addButton = document.getElementById("addButton");

function addTask() {
  if (inputBox.value === "") {
    alert("Please enter a task");
    return;
  } else {
    const li = document.createElement("li");
    li.textContent = inputBox.value;
    console.log(li);
    document.getElementById("taskList").appendChild(li);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    li.appendChild(deleteButton);
    deleteButton.addEventListener("click", function () {
      li.remove();
    });
  }
}

addButton.addEventListener("click", addTask);
