document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("darkModeToggle");
    const body = document.body;

    if (localStorage.getItem("darkMode") === "true") {
        body.classList.add("dark-mode");
        if (toggle) toggle.textContent = "☀️";
    }

    if (toggle) {
        toggle.addEventListener("click", () => {
            body.classList.toggle("dark-mode");

            const isDark = body.classList.contains("dark-mode");
            localStorage.setItem("darkMode", isDark);

            toggle.textContent = isDark ? "☀️" : "🌙";
        });
    }
});
