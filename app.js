const hamburger = document.querySelector(".hamburger")
const  navInner = document.querySelector(".nav_inner")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navInner.classList.toggle("active");
})