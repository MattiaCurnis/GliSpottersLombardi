/*funzioni menù foto 2024 e 2025*/ 

function toggleMenu() {
    let menu = document.getElementById("menu");
    menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
}

function navigateTo(page) {
    window.location.href = page;
}