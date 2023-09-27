const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");

togglePassword.addEventListener("click", function () {
  const type =
    passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);
  togglePassword.classList.toggle("fa-eye");
  togglePassword.classList.toggle("fa-eye-slash");
});

const toggleRepeatPassword = document.getElementById("toggleRepeatPassword");
const repeatPasswordInput = document.getElementById("rePassword");

toggleRepeatPassword.addEventListener("click", function () {
  const type =
    repeatPasswordInput.getAttribute("type") === "password"
      ? "text"
      : "password";
  repeatPasswordInput.setAttribute("type", type);
  toggleRepeatPassword.classList.toggle("fa-eye");
  toggleRepeatPassword.classList.toggle("fa-eye-slash");
});
