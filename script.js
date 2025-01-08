// TOGGLE MENU ICON
let menuicon = document.querySelector("#menu-icon");
let navigation = document.querySelector(".navigation");

menuicon.onclick = () => {
  menuicon.classList.toggle("fa-xmark");
  navigation.classList.toggle("active");
};

// SCROLL REVEAL
ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, header", { origin: "top" });
ScrollReveal().reveal(".home-img, .portfolio-container, .contact form", {
  origin: "bottom",
});
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-contentt p, .about-content", { origin: "right" });

// TYPING TEXT
const typed = new Typed(".type-text", {
  strings: ["BSIT Student", "Web Developer"],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
  loop: true,
});
