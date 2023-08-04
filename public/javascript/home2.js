// Slider para ".mySwiper"
var mySwiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Slider para "Autos 0km"
var $swiperSelector = $(".swiper-container");

$swiperSelector.each(function (index) {
  var $this = $(this);
  $this.addClass("swiper-slider-" + index);

  var dragSize = $this.data("drag-size") ? $this.data("drag-size") : 50;
  var freeMode = $this.data("free-mode") ? $this.data("free-mode") : false;
  var loop = $this.data("loop") ? $this.data("loop") : false;
  var slidesDesktop = $this.data("slides-desktop")
    ? $this.data("slides-desktop")
    : 4;
  var slidesTablet = $this.data("slides-tablet")
    ? $this.data("slides-tablet")
    : 3;
  var slidesMobile = $this.data("slides-mobile")
    ? $this.data("slides-mobile")
    : 2.5;
  var spaceBetween = $this.data("space-between")
    ? $this.data("space-between")
    : 20;

  var swiperAutos0km = new Swiper(".swiper-slider-" + index, {
    direction: "horizontal",
    loop: loop,
    freeMode: freeMode,
    spaceBetween: spaceBetween,
    breakpoints: {
      1920: {
        slidesPerView: slidesDesktop,
      },
      992: {
        slidesPerView: slidesTablet,
      },
      320: {
        slidesPerView: slidesMobile,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
      dragSize: dragSize,
    },
  });
});

// Slider para "Autos 0km"
var $swiperSelector = $(".swiper-container");

$swiperSelector.each(function (index) {
  var $this = $(this);
  $this.addClass("swiper-slider-" + index);

  var dragSize = $this.data("drag-size") ? $this.data("drag-size") : 50;
  var freeMode = $this.data("free-mode") ? $this.data("free-mode") : false;
  var loop = $this.data("loop") ? $this.data("loop") : false;
  var slidesDesktop = $this.data("slides-desktop")
    ? $this.data("slides-desktop")
    : 4;
  var slidesTablet = $this.data("slides-tablet")
    ? $this.data("slides-tablet")
    : 3;
  var slidesMobile = $this.data("slides-mobile")
    ? $this.data("slides-mobile")
    : 2.5;
  var spaceBetween = $this.data("space-between")
    ? $this.data("space-between")
    : 20;

  var swiperAutos0km = new Swiper(".swiper-slider-" + index, {
    direction: "horizontal",
    loop: loop,
    freeMode: freeMode,
    spaceBetween: spaceBetween,
    breakpoints: {
      1920: {
        slidesPerView: slidesDesktop,
      },
      992: {
        slidesPerView: slidesTablet,
      },
      320: {
        slidesPerView: slidesMobile,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
      dragSize: dragSize,
    },
  });
});

// Slider para "Autos usados"
var $swiperSelector2 = $(".swiper-container-usados");

$swiperSelector2.each(function (index) {
  var $this = $(this);
  $this.addClass("swiper-slider-usados-" + index);
  var dragSize = $this.data("drag-size") ? $this.data("drag-size") : 50;
  var freeMode = $this.data("free-mode") ? $this.data("free-mode") : false;
  var loop = $this.data("loop") ? $this.data("loop") : false;
  var slidesDesktop = $this.data("slides-desktop")
    ? $this.data("slides-desktop")
    : 4;
  var slidesTablet = $this.data("slides-tablet")
    ? $this.data("slides-tablet")
    : 3;
  var slidesMobile = $this.data("slides-mobile")
    ? $this.data("slides-mobile")
    : 2.5;
  var spaceBetween = $this.data("space-between")
    ? $this.data("space-between")
    : 20;

  var swiperAutosUsados = new Swiper(".swiper-slider-usados-" + index, {
    direction: "horizontal",
    loop: loop,
    freeMode: freeMode,
    spaceBetween: spaceBetween,
    breakpoints: {
      1920: {
        slidesPerView: slidesDesktop,
      },
      992: {
        slidesPerView: slidesTablet,
      },
      320: {
        slidesPerView: slidesMobile,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
      dragSize: dragSize,
    },
  });
});

const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card-reseña").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];

let isDragging = false,
  isAutoPlay = true,
  startX,
  startScrollLeft,
  timeoutId;

let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

carouselChildrens
  .slice(-cardPerView)
  .reverse()
  .forEach((card) => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
  });

carouselChildrens.slice(0, cardPerView).forEach((card) => {
  carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

arrowBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
  });
});

const infiniteScroll = () => {
  if (carousel.scrollLeft === 0) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  } else if (
    Math.ceil(carousel.scrollLeft) ===
    carousel.scrollWidth - carousel.offsetWidth
  ) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  }

  clearTimeout(timeoutId);
  if (!wrapper.matches(":hover")) autoPlay();
};

const autoPlay = () => {
  if (isAutoPlay) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      carousel.scrollLeft += firstCardWidth;
      infiniteScroll();
    }, 3000);
  }
};

autoPlay();

wrapper.addEventListener("mouseenter", () => {
  isAutoPlay = false;
  clearTimeout(timeoutId);
});
wrapper.addEventListener("mouseleave", () => {
  isAutoPlay = true;
  autoPlay();
});

window.addEventListener("resize", () => {
  cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);
  infiniteScroll();
});

carousel.addEventListener("touchstart", (e) => {
  isDragging = true;
  startX = e.touches[0].clientX;
  startScrollLeft = carousel.scrollLeft;
});

carousel.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  const touchX = e.touches[0].clientX;
  const touchDelta = touchX - startX;
  carousel.scrollLeft = startScrollLeft - touchDelta;
});

carousel.addEventListener("touchend", () => {
  isDragging = false;
  infiniteScroll();
});
