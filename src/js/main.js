/* Animation on scrolling */

const elements = [...document.querySelectorAll(".cls-aos-X, .cls-aos-Y")];

let options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.15, // [1, 0.2, 0.5] // 50% intersection
};

const observer = new IntersectionObserver(YAnimationCallback, options);

elements.forEach((element) => observer.observe(element));

function YAnimationCallback(entries, observer) {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add(
        entry.target.classList.contains("cls-aos-X")
          ? "cls-translateX"
          : "cls-translateY"
      );
      entry.target.classList.contains("cls-aos-Y") &&
        observer.unobserve(entry.target);
    } else {
      entry.target.classList.remove("cls-translateX", "cls-translateY");
    }
  }
}

/* Sidebar */
function toggleSideBar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("cls-open");

  if (sidebar.classList.contains("cls-open")) {
    sidebar.querySelector("ul").style.opacity = "1";
    sidebar.querySelector(".cls-contact").style.opacity = "1";
    sidebar.querySelector(".cls-connect").style.opacity = "1";
  }
}

/* Dynamic role changer */
const roleEl = document.getElementById("role");
const roles = [
  "Software Engineer",
  "React Developer",
  "Django Developer",
  "API Developer",
  "Web Developer",
];

let currentIndex = 0;

setInterval(() => {
  roleEl.innerHTML = roles[currentIndex];

  currentIndex++;

  if (currentIndex === roles.length) currentIndex = 0;
}, 1000);

/* Progress animation */
const progressContainer = document.getElementById("progress");

const progressObserver = new IntersectionObserver(
  progressAnimationCallback,
  options
);

progressObserver.observe(progressContainer);

function progressAnimationCallback(entries, observer) {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      {
        const progressEls = document.querySelectorAll(".cls-progress-bar");
        progressEls.forEach((progressEl) => {
          const progressPercentage = progressEl.getAttribute("data-progress");
          progressEl.style.setProperty("width", `${progressPercentage}%`);
        });
      }
      observer.unobserve(entry.target);
    }
  }
}


/* Scroll to Top functionality */
let STTButton = document.getElementById("scrollToTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    STTButton.style.opacity = "1";
    STTButton.style.zIndex = "1000";

  } else {
    STTButton.style.opacity = "0";
    STTButton.style.zIndex = "-1";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}