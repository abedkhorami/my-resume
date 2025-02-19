function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
}

function downloadResume() {
    const link = document.createElement("a");
    link.href = "https://drive.google.com/uc?export=download&id=1osQGK0zj_kXI8raWlWo1Jcp_krw1FEIc";
    link.download = "Abed_Khorami_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function setThemeBasedOnTime() {
    const hour = new Date().getHours();
    if (hour >= 18 || hour < 6) {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }
}

window.onload = function() {
    setThemeBasedOnTime();
    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark-mode");
    }
};