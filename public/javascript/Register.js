const togglePassword = document.getElementById("togglePassword");
const passwordField = document.getElementById("password");
const toggleRepeatPassword = document.getElementById("toggleRepeatPassword");
const repeatPasswordField = document.getElementById("repeatPassword");

togglePassword.addEventListener("click", () => {
  const type =
    passwordField.getAttribute("type") === "password" ? "text" : "password";
  passwordField.setAttribute("type", type);
  togglePassword.classList.toggle("fa-eye-slash");
});

toggleRepeatPassword.addEventListener("click", () => {
  const type =
    repeatPasswordField.getAttribute("type") === "password"
      ? "text"
      : "password";
  repeatPasswordField.setAttribute("type", type);
  toggleRepeatPassword.classList.toggle("fa-eye-slash");
});
