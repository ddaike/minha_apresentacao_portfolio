const btnTopo = document.getElementById("pracima");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        pracima.style.display = "block";
    } else {
        pracima.style.display = "none";
    }
});


pracima.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});