const form = document.getElementById("formulario");

console.log(form.name.value);

const setPlaceholder = (element, message) => {
  if (submitting) {
    element.placeholder = message;
  }
};

const validarNombre = () => {
  const nombre = form.name.value.trim();
  if (nombre === "") {
    form.name.classList.add("is-invalid");
    setPlaceholder(form.name, "El nombre no puede estar vacío");
    return false;
  } else {
    form.name.classList.remove("is-invalid");
    setPlaceholder(form.name, "");
    return true;
  }
};

const validarPrecio = () => {
  const precio = form.price.value.trim();
  if (precio === "") {
    form.price.classList.add("is-invalid");
    setPlaceholder(form.price, "El precio no puede estar vacío");
    return false;
  }
  if (!sonTodosNumeros(precio)) {
    form.price.classList.add("is-invalid");
    setPlaceholder(form.price, "Debe ingresar un precio válido");
    return false;
  } else {
    form.price.classList.remove("is-invalid");
    setPlaceholder(form.price, "");
    return true;
  }
};

const validarDescripcion = () => {
  const descripcion = form.description.value.trim();
  if (descripcion === "") {
    form.description.classList.add("is-invalid");
    setPlaceholder(form.description, "La descripción no puede estar vacía");
    return false;
  } else {
    form.description.classList.remove("is-invalid");
    setPlaceholder(form.description, "");
    return true;
  }
};

const validarColores = () => {
  const colores = form.colors.value.trim();
  if (colores === "") {
    form.colors.classList.add("is-invalid");
    setPlaceholder(form.colors, "Debe ingresar al menos un color");
    return false;
  } else {
    form.colors.classList.remove("is-invalid");
    setPlaceholder(form.colors, "");
    return true;
  }
};

const validarFecha = () => {
  const fecha = form.year.value.trim();
  if (fecha === "") {
    form.year.classList.add("is-invalid");
    setPlaceholder(form.year, "Debe ingresar una fecha");
    return false;
  } else {
    form.year.classList.remove("is-invalid");
    setPlaceholder(form.year, "");
    return true;
  }
};

const validarFoto = () => {
  if (form.img.files.length === 0) {
    form.img.classList.add("is-invalid");
    setPlaceholder(form.img, "Debe seleccionar una imagen");
    return false;
  } else {
    const nombreArchivo = form.img.files[0].name;
    if (/\.(jpg|jpeg|png|gif)$/i.test(nombreArchivo)) {
      form.img.classList.remove("is-invalid");
      setPlaceholder(form.img, "");
      return true;
    } else {
      form.img.classList.add("is-invalid");
      setPlaceholder(form.img, "El formato de la imagen no es válido");
      return false;
    }
  }
};

let submitting = false; // Variable para rastrear si se está haciendo submit

form.name.addEventListener("blur", validarNombre);
form.price.addEventListener("blur", validarPrecio);
form.description.addEventListener("blur", validarDescripcion);
form.colors.addEventListener("blur", validarColores);
form.year.addEventListener("blur", validarFecha);
form.img.addEventListener("blur", validarFoto);

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  submitting = true; // Establecer submitting a true antes de las validaciones

  validarNombre();
  validarPrecio();
  validarDescripcion();
  validarColores();
  validarFecha();
  validarFoto();

  submitting = false; // Establecer submitting a false después de las validaciones

  if (
    validarNombre() &&
    validarPrecio() &&
    validarDescripcion() &&
    validarColores() &&
    validarFecha() &&
    validarFoto()
  ) {
    // Muestra la alerta y luego envía el formulario
    Swal.fire({
      icon: "success",
      title: "Producto creado",
      text: "El producto se ha creado correctamente.",
    }).then(() => {
      // Cuando el usuario hace clic en "OK", envía el formulario
      form.submit();
    });
  }
});

function sonTodosNumeros(cadena) {
  return /^\d+$/.test(cadena);
}
