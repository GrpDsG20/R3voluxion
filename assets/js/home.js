function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
    document.querySelector(".overlay").classList.toggle("active");
}

function animarNumeros(id, valorFinal, duracion) {
    let elemento = document.getElementById(id);
    let inicio = 0;
    let incremento = Math.ceil(valorFinal / (duracion / 50));

    let animacion = setInterval(() => {
        inicio += incremento;
        if (inicio >= valorFinal) {
            inicio = valorFinal;
            clearInterval(animacion);
        }
        elemento.textContent = inicio;
    }, 50);
}

window.onload = function () {
    animarNumeros("projects", 200, 2000);
    animarNumeros("clients", 150, 2000);
};
