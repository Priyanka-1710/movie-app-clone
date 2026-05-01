const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const signupNow = document.getElementById("signupNow");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (!email) {
    alert("Please enter your email or phone number.");
    emailInput.focus();
    return;
  }

  const isValidEmail = email.includes("@");
  const isPhone = /^[0-9]+$/.test(email);

  if (!isValidEmail && !isPhone) {
    alert("Enter a valid email address or phone number.");
    emailInput.focus();
    return;
  }

  if (!password) {
    alert("Please enter your password.");
    passwordInput.focus();
    return;
  }

  localStorage.setItem("user", email);
  window.location.href = "home.html";
});

signupNow.addEventListener("click", () => {
  window.location.href = "index.html";
});