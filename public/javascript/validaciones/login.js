const form = document.querySelector("form");

const validarEmail = () => {
  if (form.email.value == "") {
    form.email.parentNode.classList.add("is-invalid");
    if (!form.email.parentNode.querySelector(".fa-exclamation-triangle")) {
      var icon = document.createElement("i");
      icon.classList.add("fa", "fa-exclamation-triangle");
      form.email.parentNode.appendChild(icon);
    }
    return false;
  } else {
    form.email.parentNode.classList.remove("is-invalid");
    var icon = form.email.parentNode.querySelector(".fa-exclamation-triangle");
    if (icon) {
      form.email.parentNode.removeChild(icon);
    }
    return true;
  }
};
const validarPassword = () => {
  if (form.password.value == "") {
    form.password.parentNode.classList.add("is-invalid");
    if (!form.password.parentNode.querySelector(".fa-exclamation-triangle")) {
      var icon = document.createElement("i");
      icon.classList.add("fa", "fa-exclamation-triangle");
      form.password.parentNode.appendChild(icon);
    }
    return false;
  } else {
    form.password.parentNode.classList.remove("is-invalid");
    var icon = form.password.parentNode.querySelector(
      ".fa-exclamation-triangle"
    );
    if (icon) {
      form.password.parentNode.removeChild(icon);
    }
    return true;
  }
};
form.email.addEventListener("blur", validarEmail);
form.password.addEventListener("blur", validarPassword);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validarEmail() && validarPassword()) {
    form.submit();
  }
});
