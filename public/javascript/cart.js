function removeItem(index) {
  if (carrito.length > 1) {
    carrito.splice(index, 1);
    products.splice(index, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    document.getElementById(`row${index}`).remove();

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Producto eliminado del carrito",
      text: "Se ha eliminado el producto del carrito exitosamente.",
      showConfirmButton: false,
      timer: 3000,
    });
  } else {
    localStorage.removeItem("carrito");
    products = [];
    setCarritoVacio();
  }

  let cartNumber = document.querySelector(".cart-number");
  cartNumber.innerText = productosEnElCarrito();

  document.querySelector(".totalAmount").innerText = `$ ${calcularTotal(
    products
  )}`;
}

function setCarritoVacio() {
  cartRows.innerHTML = `
  <tr>
      <td colspan="6" class="text-center">No hay productos en el carrito</td>
  </tr>
`;
  document.querySelector(".totalAmount").innerText = `$ 0`;
}

function vaciarCarrito() {
  localStorage.removeItem("carrito");

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });

  swalWithBootstrapButtons
    .fire({
      title: "Estas seguro de eliminar el carrito?",
      text: "No puedes revertir esta accion!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si, eliminar!",
      cancelButtonText: "No, cancelar!",
      reverseButtons: true,
    })
    .then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          "Eliminado !",
          "Eliminado el carrito con exito.",
          "success"
        );

        let cartNumber = document.querySelector(".cart-number");
        cartNumber.innerText = 0; // Actualizar a 0 cuando el carrito se vacía
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire(
          "Cancelado",
          "No has eliminado el carrito :)",
          "error"
        );
      }
    });
}

function calcularTotal(products) {
  return products.reduce(
    (acum, product) => (acum += product.price * product.quantity),
    0
  );
}

let cartRows = document.querySelector(".cartRows");
let products = [];

if (localStorage.carrito && localStorage.carrito != "[]") {
  carrito = JSON.parse(localStorage.carrito);
  carrito.forEach((item, index) => {
    fetch(`/api/product/${item.id}`)
      .then((res) => res.json())
      .then((product) => {
        if (product) {
          cartRows.innerHTML += `
          <tr id="row${index}">
              <th scope="row">${index + 1}</th>
              <td>${product.name}</td>
              <td>$ ${product.price}</td>
              <td class="text-center">${item.quantity}</td>
              <td class="text-center">$ ${parseFloat(
                product.price * item.quantity,
                2
              ).toFixed(2)}</td>
              <td><button class="btn btn-danger btn-sm" onclick=removeItem(${index})><i class="fas fa-trash"></i></button></td>
          </tr>
          `;
          products.push({
            productId: product.id,
            name: product.name,
            price: product.price,
            quantity: item.quantity,
          });
        } else {
          carrito.splice(index, 1);
          localStorage.setItem("carrito", JSON.stringify(carrito));
        }
      })
      .then(() => {
        document.querySelector(".totalAmount").innerText = `$ ${calcularTotal(
          products
        )}`;
      });
  });
} else {
  setCarritoVacio();
}

let formCheckout = document.querySelector("#checkoutCart");

formCheckout.onsubmit = (e) => {
  e.preventDefault();
  const formData = {
    orderItems: products,
    paymentMethod: formCheckout.paymentMethod.value,
    shippingMethod: formCheckout.shippingMethod.value,
    total: calcularTotal(products),
  };
  fetch("/api/checkout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((r) => r.json())
    .then((res) => {
      if (res.ok) {
        // Borro el carrito
        vaciarCarrito();

        Swal.fire({
          icon: "success",
          title: "Compra realizada",
          text: "La compra se ha realizado con éxito.",
        });

        location.href = `/order/${res.order.id}?creado=true`;
      } else {
        Swal.fire({
          icon: "error",
          title: "Error en la compra",
          text: "No se pudo realizar la compra, inténtelo más tarde.",
        });
      }
    })
    .catch((error) => console.log(error));
};

let vaciarTodo = document.querySelector(".vaciar-cart");
vaciarTodo.onclick = () => {
  vaciarCarrito();
  setCarritoVacio();
};
