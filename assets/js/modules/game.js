import { Background } from "./background.js";

export class Game {
    score = 0;
    gameOver = false;
    LastTimeStamp = 0;

    constructor() {
        /** @type {HTMLCanvasElement} */
        this.canvas = document.querySelector("canvas");
        this.canvas.width = 480;
        this.canvas.height = 360;

        this.ctx = this.canvas.getContext("2d");

        this.background = new Background(this.ctx);

        this.animate = this.animate.bind(this);

        this.animate(0);
    }

    /**
     * @param {number} timeStamp Nombre de millisecondes écoulées depuis le début du jeu
     */

    animate = (timeStamp) => {
        const deltaTime = timeStamp - this.LastTimeStamp;
        this.LastTimeStamp = timeStamp;

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.background.draw();
        this.background.update(deltaTime);

        window.requestAnimationFrame(this.animate);
    };
}
