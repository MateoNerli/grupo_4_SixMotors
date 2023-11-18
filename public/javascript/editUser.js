const open = document.getElementById("open");
const modal_container = document.getElementById("modal_container");
const close = document.getElementById("close");

open.addEventListener("click", () => {
  modal_container.classList.add("show");
});

close.addEventListener("click", () => {
  modal_container.classList.remove("show");
});

// Asumiendo que tienes un botón con el ID "btnGuardarCambios"
document
  .getElementById("btnGuardarCambios")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario
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
      "Content-Type": "application/x-www-form-urlencoded",
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
  })
    .then(function (response) {
      if (response.ok) {
        console.log("Perfil actualizado");
        return response.text();
      } else {
        console.log("Error al actualizar el perfil");
      }
    })
    .then(function (data) {
      // Manejar la respuesta exitosa, si es necesario
      console.log("Perfil actualizado exitosamente");
      // modal_container.classList.toggle("show");
      // Recargar la página
      // location.reload();
    })
    .catch(function (error) {
      // Manejar errores
      console.error(error.message);
    });
}
