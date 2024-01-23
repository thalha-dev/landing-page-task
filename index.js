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
