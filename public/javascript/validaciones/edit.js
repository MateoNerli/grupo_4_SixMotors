const form = document.getElementById("formulario");

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

const validarOption = () => {
  const option = form.type.value;
  if (option === "") {
    form.type.classList.add("is-invalid");
    return false;
  } else {
    form.type.classList.remove("is-invalid");
    setPlaceholder(form.type, "");
    return true;
  }
};

const validarIsKM = () => {
  const isKM = form.is_km.value;
  if (isKM === "") {
    form.is_km.classList.add("is-invalid");
    return false;
  } else {
    form.is_km.classList.remove("is-invalid");
    setPlaceholder(form.is_km, "");
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

let submitting = false; // Variable para rastrear si se está haciendo submit

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  submitting = true; // Establecer submitting a true antes de las validaciones

  const esNombreValido = validarNombre();
  const esPrecioValido = validarPrecio();
  const esDescripcionValida = validarDescripcion();
  const sonColoresValidos = validarColores();
  const esFechaValida = validarFecha();
  const esOpcionValida = validarOption();
  const esIsKMValido = validarIsKM();

  submitting = false; // Establecer submitting a false después de las validaciones

  if (
    esNombreValido &&
    esPrecioValido &&
    esDescripcionValida &&
    sonColoresValidos &&
    esFechaValida &&
    esOpcionValida &&
    esIsKMValido
  ) {
    // Muestra la alerta y luego envía el formulario
    Swal.fire({
      icon: "success",
      title: "Producto editado",
      text: "El producto se ha editado correctamente.",
    }).then(() => {
      // Cuando el usuario hace clic en "OK", envía el formulario
      form.submit();
    });
  }
});

function sonTodosNumeros(cadena) {
  return /^\d+$/.test(cadena);
}
