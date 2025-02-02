/* eslint-disable no-unused-vars */
function scrollToContent() {
  document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Intersection Observer for section animations
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
  }
);

sections.forEach((section) => observer.observe(section));

// eslint-disable-next-line no-undef
const swiper = new Swiper(".mySwiper", {
  direction: "horizontal",
  loop: true,
  speed: 5000,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  keyboard: {
    enabled: true,
  },
  mousewheel: false,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  allowSlidePrev: true,
  allowSlideNext: true,
});
