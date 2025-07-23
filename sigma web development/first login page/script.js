 // Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Stop form from submitting

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // Basic validation
    if (username === "" || password === "") {
      alert("Please enter both username and password.");
      return;
    }

    // Simulate login (You can add real backend call here)
    console.log("Logging in with:", username, password);
    alert("Login successful! (This is just a simulation)");

    // Optionally clear the form
    form.reset();
  });
});
