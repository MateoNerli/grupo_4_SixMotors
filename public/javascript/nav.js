const search = document.querySelector(".search-box");
const menu = document.querySelector(".navbar");

document.querySelector("#search-icon").onclick = () => {
  search.classList.toggle("active");
  menu.classList.remove("active");
};

document.querySelector("#menu-icon").onclick = () => {
  menu.classList.toggle("active");
  search.classList.remove("active");
};

window.onscroll = () => {
  search.classList.remove("active");
  menu.classList.remove("active");
};

document.addEventListener("DOMContentLoaded", function () {
  const dropUser = document.getElementById("dropUser");
  const dropdownMenu = document.querySelector(".dropdown-menu");

  dropUser.addEventListener("click", function (e) {
    e.preventDefault();
    dropdownMenu.style.display =
      dropdownMenu.style.display === "block" ? "none" : "block";
  });

  // Cerrar el menú al hacer clic en cualquier otro lugar de la página
  document.addEventListener("click", function (e) {
    if (e.target !== dropUser && e.target !== dropdownMenu) {
      dropdownMenu.style.display = "none";
    }
  });
});
