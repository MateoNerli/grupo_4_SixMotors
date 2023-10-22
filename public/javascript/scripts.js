function productosEnElCarrito() {
  if (localStorage.carrito) {
    return JSON.parse(localStorage.carrito).length;
  } else {
    return 0;
  }
}

window.addEventListener("load", function () {
  /* Selecciono todos los productos de la página */
  let productos = document.querySelectorAll(".agregar_carrito");

  /* Creo un event listener por cada botón */
  productos.forEach((producto) => {
    producto.addEventListener("click", function (e) {
      if (localStorage.carrito) {
        let carrito = JSON.parse(localStorage.carrito);
        let index = carrito.findIndex((prod) => prod.id == e.target.dataset.id);
        if (index != -1) {
          carrito[index].quantity = carrito[index].quantity + 1;
        } else {
          carrito.push({ id: e.target.dataset.id, quantity: 1 });
        }
        localStorage.setItem("carrito", JSON.stringify(carrito));
      } else {
        localStorage.setItem(
          "carrito",
          JSON.stringify([{ id: e.target.dataset.id, quantity: 1 }])
        );
      }
      cartNumber.innerText = productosEnElCarrito();

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Producto agregado al carrito",
        showConfirmButton: false,
        timer: 1000,
        toast: true, // Establece la alerta como estilo "toast"
        customClass: {
          container: "toast-container", // Clase para el contenedor del toast
          popup: "toast-popup", // Clase para el toast en sí
          title: "toast-title", // Clase para el título
          icon: "toast-icon", // Clase para el icono
        },
        background: "#4BB543", // Fondo verde
      });
    });
  });

  /* Numero del carrito */
  let cartNumber = document.querySelector(".cart-number");
  cartNumber.innerText = productosEnElCarrito();
});
