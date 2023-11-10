const form = document.querySelector("#formulario");
let submitting = false; // Variable para rastrear si se está haciendo submit

const setPlaceholder = (element, message) => {
  if (submitting) {
    element.placeholder = message;
  }
};

const validarNombre = () => {
  if (form.nombre.value === "") {
    form.nombre.classList.add("is-invalid");
    setPlaceholder(form.nombre, "El nombre no puede estar vacio");
    return false;
  } else {
    form.nombre.classList.remove("is-invalid");
    setPlaceholder(form.nombre, "Pedro");
    return true;
  }
};

const validarApellido = () => {
  if (form.apellido.value === "") {
    form.apellido.classList.add("is-invalid");
    setPlaceholder(form.apellido, "El apellido no puede estar vacio");
    return false;
  } else {
    form.apellido.classList.remove("is-invalid");
    setPlaceholder(form.apellido, "Rodriguez");
    return true;
  }
};

const validarEmail = () => {
  if (form.email.value === "") {
    form.email.classList.add("is-invalid");
    setPlaceholder(form.email, "El email no puede estar vacio");
    return false;
  } else if (!validarQueSeaEmail(form.email.value)) {
    form.email.classList.add("is-invalid");
    setPlaceholder(form.email, "El email es invalido");
    return false;
  } else {
    form.email.classList.remove("is-invalid");
    setPlaceholder(form.email, "PedroRodriguez@email.com");
    return true;
  }
};

const validarCel = () => {
  if (form.cel.value === "") {
    form.cel.classList.add("is-invalid");
    setPlaceholder(form.cel, "El telefono no puede estar vacio");
    return false;
  }
  if (!sonTodosNumeros(form.cel.value)) {
    form.cel.classList.add("is-invalid");
    setPlaceholder(form.cel, "El telefono es invalido");
    return false;
  } else {
    form.cel.classList.remove("is-invalid");
    setPlaceholder(form.cel, "+54 3364525352");
    return true;
  }
};

const validarMensaje = () => {
  if (form.mensaje.value === "") {
    form.mensaje.classList.add("is-invalid");
    setPlaceholder(form.mensaje, "El mensaje no puede estar vacio");
    return false;
  } else {
    form.mensaje.classList.remove("is-invalid");
    setPlaceholder(form.mensaje, "Escribi tu mensaje aqui...");
    return true;
  }
};

form.nombre.addEventListener("blur", validarNombre);
form.apellido.addEventListener("blur", validarApellido);
form.email.addEventListener("blur", validarEmail);
form.cel.addEventListener("blur", validarCel);
form.mensaje.addEventListener("blur", validarMensaje);

// form.nombre.focus();

form.addEventListener("submit", (e) => {
  e.preventDefault();

  submitting = true; // Establecer submitting a true antes de las validaciones

  let esValidoNombre = validarNombre();
  let esValidoApellido = validarApellido();
  let esValidoEmail = validarEmail();
  let esValidoCel = validarCel();
  let esValidoMensaje = validarMensaje();

  submitting = false; // Establecer submitting a false después de las validaciones

  if (
    esValidoNombre &&
    esValidoApellido &&
    esValidoEmail &&
    esValidoCel &&
    esValidoMensaje
  ) {
    // Si todas las validaciones son exitosas, mostrar una alerta de SweetAlert
    Swal.fire({
      icon: "success",
      title: "Mensaje enviado con éxito",
      text: "En breve nos pondremos en contacto con usted",
    }).then(() => {
      form.nombre.value = "";
      form.apellido.value = "";
      form.email.value = "";
      form.cel.value = "";
      form.mensaje.value = "";
    });

    // form.submit();
  }
});

function sonTodosNumeros(cadena) {
  return /^\d+$/.test(cadena);
}

function validarQueSeaEmail(email) {
  var emailValido = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  return emailValido.test(email);
}
