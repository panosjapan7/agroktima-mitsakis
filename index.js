window.onload = function () {
  const menu_btn = document.querySelector(".hamburger");
  const mobile_menu = document.querySelector(".mobile-nav");

  menu_btn.addEventListener("click", function () {
    menu_btn.classList.toggle("is-active");
    mobile_menu.classList.toggle("is-active");
  });
};

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
