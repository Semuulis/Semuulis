document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".theme-toggle");
    const root = document.documentElement;

    toggleButton.addEventListener("click", () => {
        if (root.getAttribute("data-theme") === "light") {
            root.setAttribute("data-theme", "dark");
        } else {
            root.setAttribute("data-theme", "light");
        }
    });
});