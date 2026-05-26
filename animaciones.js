document.addEventListener("DOMContentLoaded", () => {

    const reglas = document.querySelectorAll(".regla");

    reglas.forEach((regla, index) => {

        regla.style.opacity = "0";
        regla.style.transform = "translateY(40px)";
        regla.style.transition = "all 0.6s ease";

        setTimeout(() => {
            regla.style.opacity = "1";
            regla.style.transform = "translateY(0)";
        }, index * 200);

    });

});