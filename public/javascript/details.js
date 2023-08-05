//para aumentar las flechitas

const inputQuantity = document.querySelector(".input-quantity");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");

function incrementQuantity() {
  inputQuantity.stepUp(1);
}

function decrementQuantity() {
  inputQuantity.stepDown(1);
}

incrementBtn.addEventListener("click", incrementQuantity);
decrementBtn.addEventListener("click", decrementQuantity);

//para abrir y cerar descripcion y reseñas
const descriptionTitle = document.querySelector(".title-description");
const descriptionContent = document.querySelector(".text-description");
const reviewsTitle = document.querySelector(".title-reviews");
const reviewsContent = document.querySelector(".text-reviews");

descriptionTitle.addEventListener("click", () => {
  descriptionContent.classList.toggle("hidden");
});

reviewsTitle.addEventListener("click", () => {
  reviewsContent.classList.toggle("hidden");
});
