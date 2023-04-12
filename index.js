window.onload = function () {
  const menu_btn = document.querySelector(".hamburger");
  const mobile_menu = document.querySelector(".mobile-nav");

  menu_btn.addEventListener("click", function () {
    menu_btn.classList.toggle("is-active");
    mobile_menu.classList.toggle("is-active");
  });

  const mobile_links = document.querySelectorAll(".mobile-nav a");
  mobile_links.forEach((link) => {
    link.addEventListener("click", () => {
      menu_btn.classList.remove("is-active");
      mobile_menu.classList.remove("is-active");
    });
  });
};

// BACK TO TOP FUNCTiONALITY
let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    setTimeout(() => {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0;
    }, 500);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}
// END OF BACK TO TOP FUNCTiONALITY

const links = document.querySelectorAll(".menu-item");

for (const link of links) {
  link.addEventListener("click", scrollToSection);
}

function scrollToSection(event) {
  event.preventDefault();

  const target = event.currentTarget.getAttribute("href");
  const offset = document.querySelector(target).offsetTop;
  const delay = 30;

  setTimeout(() => {
    window.scroll({
      top: offset,
      behavior: "smooth",
    });
  }, delay);
}

// SLIDER
// const slider = document.querySelector(".slider");
// const container = slider.querySelector(".slider-container");
// const images = container.querySelectorAll("img");
// const prevBtn = slider.querySelector(".slider-prev");
// const nextBtn = slider.querySelector(".slider-next");
// const thumbnails = slider.querySelectorAll(".slider-thumbnails img");

// let currentImageIndex = 0;

// thumbnails[currentImageIndex].classList.add("active");

// function showImage(index) {
//   container.style.transform = `translateX(-${index * 25}%)`;
//   thumbnails[currentImageIndex].classList.remove("active");
//   currentImageIndex = index;
//   thumbnails[currentImageIndex].classList.add("active");
// }

// function nextImage() {
//   const nextIndex =
//     currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
//   showImage(nextIndex);
// }

// function prevImage() {
//   const prevIndex =
//     currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
//   showImage(prevIndex);
// }

// nextBtn.addEventListener("click", nextImage);
// prevBtn.addEventListener("click", prevImage);

// thumbnails.forEach((thumbnail, index) => {
//   thumbnail.addEventListener("click", () => {
//     showImage(index);
//   });
// });

// NEW SOLUTION
function setupSlider(slider) {
  const container = slider.querySelector(".slider-container");
  const images = container.querySelectorAll("img");
  const prevBtn = slider.querySelector(".slider-prev");
  const nextBtn = slider.querySelector(".slider-next");
  const thumbnails = slider.querySelectorAll(".slider-thumbnails img");

  let currentImageIndex = 0;

  thumbnails[currentImageIndex].classList.add("active");

  function showImage(index) {
    container.style.transform = `translateX(-${index * 25}%)`;
    thumbnails[currentImageIndex].classList.remove("active");
    currentImageIndex = index;
    thumbnails[currentImageIndex].classList.add("active");
  }

  function nextImage() {
    const nextIndex =
      currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
    showImage(nextIndex);
  }

  function prevImage() {
    const prevIndex =
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    showImage(prevIndex);
  }

  nextBtn.addEventListener("click", nextImage);
  prevBtn.addEventListener("click", prevImage);

  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", () => {
      showImage(index);
    });
  });
}

const sliders = document.querySelectorAll(".slider");

sliders.forEach(setupSlider);
