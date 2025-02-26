function registerUser() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var userName = document.getElementById("userName").value;

  if (
    email == "" ||
    password == "" ||
    firstName == "" ||
    lastName == "" ||
    userName == ""
  ) {
    document.alert("Please fill in all fields");
    return;
  } else {
    var user = {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      userName: userName,
    };

    var users = JSON.parse(localStorage.getItem("users")) || [];

    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));

    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("userName").value = "";

    document.getElementById("success").innerHTML =
      "User registered successfully";
  }
}
