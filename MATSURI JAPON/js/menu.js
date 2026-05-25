const toggleBtn = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("activo");

    if(menu.classList.contains("activo")){
        toggleBtn.innerHTML = "✕";
    } else {
        toggleBtn.innerHTML = "☰";
    }
});