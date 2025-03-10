function showCategory(category) {
    document.getElementById('videos').style.display = 'none';
    document.getElementById('reels').style.display = 'none';
    document.getElementById('fotos').style.display = 'none';
    document.getElementById(category).style.display = 'grid';
}

function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
    document.querySelector(".overlay").classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
    const titleText = "Transforma tu visión en realidad";
    const textText = "En R3voluxion, fusionamos innovación y diseño para crear soluciones que marquen diferencia";

    function typeEffect(element, text, index, callback) {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            let speed = Math.random() * 50 + 50;
            setTimeout(() => typeEffect(element, text, index + 1, callback), speed);
        } else if (callback) {
            setTimeout(callback, 300);
        }
    }

    const titleElement = document.getElementById("typing-title");
    const textElement = document.getElementById("typing-text");

    typeEffect(titleElement, titleText, 0, () => {
        setTimeout(() => {
            typeEffect(textElement, textText, 0);
        }, 500);
    });

    document.querySelector(".btn-primary").addEventListener("click", function (event) {
        event.preventDefault();
        document.querySelector(".media-section").scrollIntoView({ behavior: "smooth" });
    });
});
