const form = document.getElementById("formulario");

//parentNode es el padre del elemento
const validarNombre = () => {
  if (form.name.value == "" || form.name.value.length < 2) {
    form.name.parentNode.classList.add("is-invalid");
    if (!form.name.parentNode.querySelector(".fa-exclamation-triangle")) {
      var icon = document.createElement("i");
      icon.classList.add("fa", "fa-exclamation-triangle");
      form.name.parentNode.appendChild(icon);
    }
    return false;
  } else {
    form.name.parentNode.classList.remove("is-invalid");
    var icon = form.name.parentNode.querySelector(".fa-exclamation-triangle");
    if (icon) {
      form.name.parentNode.removeChild(icon);
    }
    return true;
  }
};

const validarApellido = () => {
  if (form.lastname.value == "" || form.lastname.value.length < 2) {
    form.lastname.parentNode.classList.add("is-invalid");
    if (!form.lastname.parentNode.querySelector(".fa-exclamation-triangle")) {
      var icon = document.createElement("i");
      icon.classList.add("fa", "fa-exclamation-triangle");
      form.lastname.parentNode.appendChild(icon);
    }
    return false;
  } else {
    form.lastname.parentNode.classList.remove("is-invalid");
    var icon = form.lastname.parentNode.querySelector(
      ".fa-exclamation-triangle"
    );
    if (icon) {
      form.lastname.parentNode.removeChild(icon);
    }
    return true;
  }
};

const validarUser = () => {
  if (form.user.value == "" || form.user.value.length < 2) {
    form.user.parentNode.classList.add("is-invalid");
    if (!form.user.parentNode.querySelector(".fa-exclamation-triangle")) {
      var icon = document.createElement("i");
      icon.classList.add("fa", "fa-exclamation-triangle");
      form.user.parentNode.appendChild(icon);
    }
    return false;
  } else {
    form.user.parentNode.classList.remove("is-invalid");
    var icon = form.user.parentNode.querySelector(".fa-exclamation-triangle");
    if (icon) {
      form.user.parentNode.removeChild(icon);
    }
    return true;
  }
};

const validarEmail = () => {
  if (!validarQueSeaEmail(form.email.value) || form.email.value == "") {
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

const validarPais = () => {
  if (form.country.value == "") {
    form.country.parentNode.classList.add("is-invalid");
    if (!form.country.parentNode.querySelector(".fa-exclamation-triangle")) {
      var icon = document.createElement("i");
      icon.classList.add("fa", "fa-exclamation-triangle");
      form.country.parentNode.appendChild(icon);
    }
    return false;
  } else {
    form.country.parentNode.classList.remove("is-invalid");
    var icon = form.country.parentNode.querySelector(
      ".fa-exclamation-triangle"
    );
    if (icon) {
      form.country.parentNode.removeChild(icon);
    }
    return true;
  }
};

const validarCel = () => {
  if (form.cel.value == "" || !sonTodosNumeros(form.cel.value)) {
    form.cel.parentNode.classList.add("is-invalid");
    if (!form.cel.parentNode.querySelector(".fa-exclamation-triangle")) {
      var icon = document.createElement("i");
      icon.classList.add("fa", "fa-exclamation-triangle");
      form.cel.parentNode.appendChild(icon);
    }
    return false;
  } else {
    form.cel.parentNode.classList.remove("is-invalid");
    var icon = form.cel.parentNode.querySelector(".fa-exclamation-triangle");
    if (icon) {
      form.cel.parentNode.removeChild(icon);
    }
    return true;
  }
};

const validarContrasena = () => {
  if (
    form.password.value == "" ||
    form.password.value.length < 8 ||
    !validarValorContrasena(form.password.value)
  ) {
    form.password.parentNode.classList.add("is-invalid");
    if (!form.password.parentNode.querySelector(".fa-exclamation-triangle")) {
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
  }
};

const validarRepetirContrasena = () => {
  if (
    form.repeatPassword.value == "" ||
    form.repeatPassword.value != form.password.value
  ) {
    form.repeatPassword.parentNode.classList.add("is-invalid");
    if (
      !form.repeatPassword.parentNode.querySelector(".fa-exclamation-triangle")
    ) {
      var icon = document.createElement("i");
      icon.classList.add("fa", "fa-exclamation-triangle");
      form.repeatPassword.parentNode.appendChild(icon);
    }
    return false;
  } else {
    form.repeatPassword.parentNode.classList.remove("is-invalid");
    var icon = form.repeatPassword.parentNode.querySelector(
      ".fa-exclamation-triangle"
    );
    if (icon) {
      form.repeatPassword.parentNode.removeChild(icon);
    }
    return true;
  }
};

const validarPassword = () => {
  const password = form.password.value;
  const repeatPassword = form.repeatPassword.value;
  if (password !== repeatPassword) {
    form.password.parentNode.classList.add("is-invalid");
    form.repeatPassword.parentNode.classList.add("is-invalid");
    if (!form.password.parentNode.querySelector(".fa-exclamation-triangle")) {
      var icon = document.createElement("i");
      icon.classList.add("fa", "fa-exclamation-triangle");
      form.password.parentNode.appendChild(icon);
      form.repeatPassword.parentNode.appendChild(icon.cloneNode());
    }
    return false;
  } else {
    form.password.parentNode.classList.remove("is-invalid");
    form.repeatPassword.parentNode.classList.remove("is-invalid");
    var icon = form.password.parentNode.querySelector(
      ".fa-exclamation-triangle"
    );
    if (icon) {
      form.password.parentNode.removeChild(icon);
      form.repeatPassword.parentNode.removeChild(
        form.repeatPassword.parentNode.querySelector(".fa-exclamation-triangle")
      );
    }
    return true;
  }
};

const validarFoto = () => {
  if (form.img.files.length === 0) {
    form.img.parentNode.classList.add("is-invalid");
    return false;
  } else {
    const nombreArchivo = form.img.files[0].name;
    if (/\.(jpg|jpeg|png|gif)$/i.test(nombreArchivo)) {
      form.img.parentNode.classList.remove("is-invalid");
      return true;
    } else {
      form.img.parentNode.classList.add("is-invalid");
      return false;
    }
  }
};

form.name.addEventListener("blur", validarNombre);
form.lastname.addEventListener("blur", validarApellido);
form.user.addEventListener("blur", validarUser);
form.email.addEventListener("blur", validarEmail);
form.country.addEventListener("blur", validarPais);
form.cel.addEventListener("blur", validarCel);
form.password.addEventListener("blur", validarContrasena);
form.repeatPassword.addEventListener("blur", validarRepetirContrasena);
form.img.addEventListener("blur", validarFoto);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validarNombre();
  validarApellido();
  validarUser();
  validarEmail();
  validarPais();
  validarCel();
  validarContrasena();
  validarRepetirContrasena();
  validarFoto();

  if (
    validarNombre() &&
    validarApellido() &&
    validarUser() &&
    validarEmail() &&
    validarPais() &&
    validarCel() &&
    validarContrasena() &&
    validarRepetirContrasena() &&
    validarFoto()
  ) {
    form.submit();
  }
});

function sonTodosNumeros(cadena) {
  return /^\d+$/.test(cadena);
}

function validarValorContrasena(contrasena) {
  const tieneMayuscula = /[A-Z]/.test(contrasena);
  const tieneMinuscula = /[a-z]/.test(contrasena);
  const tieneNumero = /[0-9]/.test(contrasena);
  const tieneCaracterEspecial = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(
    contrasena
  );

  return (
    tieneMayuscula && tieneMinuscula && tieneNumero && tieneCaracterEspecial
  );
}

function validarQueSeaEmail(email) {
  var emailValido = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  return emailValido.test(email);
}
