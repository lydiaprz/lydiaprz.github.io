const langToggle = document.getElementById("lang-toggle");
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

const translations = {
    es: {
        role: "Desarrolladora & QA Tester",
        description: "Apasionada por la tecnología y la ciberseguridad.",
        projectsTitle: "Proyectos"
    },
    en: {
        role: "Developer & QA Tester",
        description: "Passionate about technology and cybersecurity.",
        projectsTitle: "Projects"
    }
};

let currentLang = "es";
langToggle.addEventListener("click", () => {
    currentLang = currentLang === "es" ? "en" : "es";
    langToggle.textContent = currentLang.toUpperCase();
    document.getElementById("role").textContent = translations[currentLang].role;
    document.getElementById("description").textContent = translations[currentLang].description;
    document.getElementById("projects-title").textContent = translations[currentLang].projectsTitle;
});

themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    themeToggle.textContent = body.classList.contains("dark-mode") ? "☀️" : "🌙";
});
