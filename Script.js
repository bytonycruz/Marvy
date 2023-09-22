
onload = () => {
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
    }, 1000);
};


document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.getElementById("nombre").classList.add("visible");
    }, 1000); // Agrega la clase "visible" después de un retraso de 1 segundo (1000 ms)
});