let botonAgragar = document.querySelectorAll("agregarCarrito");
botonAgragar.forEach((boton) => {
  boton.addEventListener("click", (e) => {
    //console.log(e.target.dataset.id);
    if (localStorage.carrito) {
      let carrito = JSON.parse(localStorage.carrito);
      console.log(carrito);
    } else {
      localStorage.setItem(
        "carrito",
        JSON.stringify([{ id: e.target.dataset.id, cantidad: 1 }])
      );
    }
  });
});
