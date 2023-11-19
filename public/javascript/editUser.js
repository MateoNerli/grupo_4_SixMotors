const open = document.getElementById("open");
const modal_container = document.getElementById("modal_container");
const close = document.getElementById("close");

open.addEventListener("click", () => {
  modal_container.classList.add("show");
});

close.addEventListener("click", () => {
  modal_container.classList.remove("show");
});

document
  .getElementById("btnGuardarCambios")
  .addEventListener("click", function (event) {
    event.preventDefault();
    actualizarPerfil();
  });
function actualizarPerfil() {
  var name = document.getElementById("name").value;
  var lastname = document.getElementById("lastname").value;
  var user = document.getElementById("user").value;
  var country = document.getElementById("country").value;
  var cel = document.getElementById("cel").value;
  var review = document.getElementById("review").value;

  fetch("/user/update-user", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded", //esto es para que el controlador sepa que le estoy enviando datos
    },
    body:
      "name=" +
      encodeURIComponent(name) +
      "&lastname=" +
      encodeURIComponent(lastname) +
      "&user=" +
      encodeURIComponent(user) +
      "&country=" +
      encodeURIComponent(country) +
      "&cel=" +
      encodeURIComponent(cel) +
      "&review=" +
      encodeURIComponent(review),
    //esto lo que hace es que toma los datos del formulario y los envia al controlador
  })
    .then(function (data) {
      console.log("Perfil actualizado exitosamente");

      Swal.fire({
        title: "Perfil Actualizado",
        text: "¡Tu perfil se ha actualizado correctamente!",
        icon: "success",
        confirmButtonText: "Aceptar",
      }).then(() => {
        location.reload();
      });
    })
    .catch(function (error) {
      console.error(error.message);
      Swal.fire({
        title: "Error",
        text: "Hubo un error al actualizar el perfil. Por favor, inténtalo nuevamente.",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    });
}
