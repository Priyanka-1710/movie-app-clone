const emailInput = document.getElementById("email");
const getStartedBtn = document.getElementById("getStartedBtn");
const signInBtn = document.getElementById("signinBtn");
const languageSelect = document.querySelector("select");
const rows = document.querySelectorAll(".row");
const buttons = document.querySelectorAll("button");

getStartedBtn.addEventListener("click", () => {
  const email = emailInput.value.trim();

  if (email === "") {
    alert("Please enter your email");
    emailInput.focus();
  } else if (!email.includes("@")) {
    alert("Enter a valid email address");
    emailInput.focus();
  } else {
    window.location.href = "signin.html";
  }
});

signInBtn.addEventListener("click", () => {
  window.location.href = "signin.html";
});

languageSelect.addEventListener("change", () => {
  alert("Language changed to: " + languageSelect.value);
});

window.addEventListener("scroll", () => {
  rows.forEach(row => {
    const position = row.getBoundingClientRect().top;

    if (position < window.innerHeight - 100) {
      row.style.opacity = "1";
      row.style.transform = "translateY(0)";
    }
  });
});

buttons.forEach(btn => {
  btn.addEventListener("mouseover", () => {
    btn.style.opacity = "0.8";
  });

  btn.addEventListener("mouseout", () => {
    btn.style.opacity = "1";
  });
});