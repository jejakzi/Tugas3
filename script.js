const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu-mobile");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

const scrollLinks = document.querySelectorAll("[data-scroll]");

scrollLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you for contacting us! We will get back to you soon.");
  });
