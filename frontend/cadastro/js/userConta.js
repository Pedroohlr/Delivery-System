document.querySelector("button").addEventListener("click", () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userPhoto");
    window.location.href="./login.html"
});