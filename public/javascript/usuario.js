const sliderContainer = document.querySelector(".carrusel");
const leftArrow = document.getElementById("left");
const rightArrow = document.getElementById("right");
const sliderItems = document.querySelectorAll(".contenidio");

const itemWidth = sliderItems[0].offsetWidth;

let position = 0;

function slideLeft() {
  if (position === 0) return;
  position += itemWidth;
  sliderContainer.style.transform = `translateX(${position}px)`;
}

function slideRight() {
  const maxPosition = -(sliderItems.length - 1) * itemWidth;
  if (position === maxPosition) return;
  position -= itemWidth;
  sliderContainer.style.transform = `translateX(${position}px)`;
}

leftArrow.addEventListener("click", slideLeft);
rightArrow.addEventListener("click", slideRight);
