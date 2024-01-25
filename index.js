window.addEventListener("scroll", function () {
  let navbar = document.getElementById("nav-bar");
  let num = window.scrollY + navbar.getBoundingClientRect().top;
  let windowScroll = window.scrollY;
  // console.log(num, " ", windowScroll);

  // Check if the element has reached the top of the screen
  if (windowScroll >= num) {
    navbar.classList.add("make-it-static");
  } else {
    navbar.classList.remove("make-it-static");
  }
});

const closeMenuButton = document.querySelector(
  ".nav-bar-close-button-container button",
);
const navSection = document.querySelector(".nav-bar-section");
const openMenuButton = document.querySelector(".mobile-nav-menu-button");

closeMenuButton.addEventListener("click", () => {
  navSection.classList.remove("click-nav-open-button");
  navSection.classList.add("click-nav-close-button");
});

openMenuButton.addEventListener("click", () => {
  navSection.classList.remove("click-nav-close-button");
  navSection.classList.add("click-nav-open-button");
});

const navLinks = document.querySelectorAll(".nav-bar a");

document.addEventListener("DOMContentLoaded", () => {
  navLinks.forEach((x) => {
    x.addEventListener("click", () => {
      navLinks.forEach((other) => {
        other.classList.remove("nav-item-selected");
      });
      x.classList.add("nav-item-selected");
    });
  });
});
