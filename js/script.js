const loginToggle = document.getElementById("loginToggle");
const signupToggle = document.getElementById("signupToggle");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

loginToggle.onclick = () => {
  loginToggle.classList.add("active");
  signupToggle.classList.remove("active");
  loginForm.classList.remove("hidden");
  signupForm.classList.add("hidden");
};

signupToggle.onclick = () => {
  signupToggle.classList.add("active");
  loginToggle.classList.remove("active");
  signupForm.classList.remove("hidden");
  loginForm.classList.add("hidden");
};
