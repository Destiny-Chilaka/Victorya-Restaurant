let toggle = document.getElementById("navMenu");
let Dropdown = document.querySelector(".navbar-list");


toggle.addEventListener("click", () => {
    Dropdown.classList.toggle("active");
});