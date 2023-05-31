import { Game } from "./modules/game.js";
new Game();

window.addEventListener("DOMContentLoaded", function () {
    var messageElement = document.querySelector(".message");

    function handleOrientationChange() {
        if (window.matchMedia("(orientation: portrait)").matches) {
            messageElement.style.display = "block";
        } else {
            messageElement.style.display = "none";
        }
    }

    handleOrientationChange();

    window.addEventListener("resize", handleOrientationChange);
});

window.addEventListener("DOMContentLoaded", function () {
    var buttonImage = document.createElement("img");
    buttonImage.src = "bouton-tirer.png";
    buttonImage.alt = "Bouton Tirer";

    // Ajoutez des attributs de style personnalisés si nécessaire
    buttonImage.style.width = "100px";
    buttonImage.style.height = "50px";

    // Insérez l'image dans un élément existant sur votre page (par exemple, le body)
    var container = document.body;
    container.appendChild(buttonImage);
});
