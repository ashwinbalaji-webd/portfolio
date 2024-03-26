/* Animation on scrolling */

const elements = [...document.querySelectorAll(".cls-aos-X, .cls-aos-Y")];

let options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1, // [1, 0.2, 0.5] // 50% intersection
};

const observer = new IntersectionObserver(callback, options);

elements.forEach((element) => observer.observe(element));

function callback(entries, observer) {
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
  "Web Developer"
];

let currentIndex = 0;

setInterval(() => {
  roleEl.innerHTML = roles[currentIndex];

  currentIndex++;

  if (currentIndex === roles.length) currentIndex = 0;
}, 1000);
