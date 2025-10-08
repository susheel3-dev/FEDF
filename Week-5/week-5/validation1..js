document.getElementById("regForm").onsubmit = function(e) {
  e.preventDefault();

  let name = document.getElementById("fullname").value.trim();
  let email = document.getElementById("email").value.trim();
  let pass = document.getElementById("password").value;
  let phone = document.getElementById("phone").value.trim();

  let valid = true;

  // Clear previous errors
  document.querySelectorAll(".error").forEach(el => el.textContent = "");

  if (!name) {
    document.getElementById("nameErr").textContent = "Full Name is required";
    valid = false;
  }
  if (!email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
    document.getElementById("emailErr").textContent = "Enter a valid email";
    valid = false;
  }
  if (pass.length < 6) {
    document.getElementById("passErr").textContent = "Password must be at least 6 characters";
    valid = false;
  }
  if (!phone.match(/^[0-9]{10}$/)) {
    document.getElementById("phoneErr").textContent = "Enter a 10-digit phone number";
    valid = false;
  }

  if (valid) {
    alert("🎉 Registration Successful!");
    // 👉 here you can send data to server or save in localStorage
  }
}
