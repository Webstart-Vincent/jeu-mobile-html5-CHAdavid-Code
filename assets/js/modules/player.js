import { Game } from "./game.js";
import { InputHandler } from "./input-handler.js";
import { Key } from "./input-handler.js";

export class Player {
    sourceX = 0;
    sourceY = 0;
    destinationX = 25;
    destinationY = 100;

    fps = 1000 / 12; // 1s pour 12 frames (la cadence de l'animation)
    framesLength = 3; // Nombre de frames dans la ligne de la spritesheet
    frameIndex = 0;

    speed = 3;

    /**
     *
     * @param {Game} game
     */
    constructor(game) {
        this.image = new Image();
        this.image.src = "./assets/img/player-spritesheet.png";

        this.ctx = game.ctx;
        this.inputkeys = game.InputHandler.keys;

        this.frameWidth = 116;
        this.frameHeight = 179;

        const { canvas } = game;
        this.maxDestinationX = canvas.width - this.frameWidth;
        this.maxDestinationY = canvas.height - this.frameHeight;
    }

    draw() {
        this.ctx.drawImage(
            this.image,
            this.sourceX,
            this.sourceY,
            this.frameWidth, // cadrage dans la source
            this.frameHeight, // cadrage dans la source
            this.destinationX,
            this.destinationY,
            this.frameWidth, // dimension dans la destination
            this.frameHeight // dimension dans la destination
        );
    }

    /**
     * @param {number} timeStamp
     */

    update(timeStamp) {
        const frameIndex = Math.floor(timeStamp / this.fps) % this.framesLength;
        this.sourceX = frameIndex * this.frameWidth;

        if (this.inputkeys.has(Key.ArrowUp)) this.destinationY -= this.speed;
        if (this.inputkeys.has(Key.ArrowRight)) this.destinationX += this.speed;
        if (this.inputkeys.has(Key.ArrowDown)) this.destinationY += this.speed;
        if (this.inputkeys.has(Key.ArrowLeft)) this.destinationX -= this.speed;

        if (this.destinationY > 0) this.DestinationY = 0;
        if (this.destinationY < 0) this.DestinationY = 0;
        if (this.destinationY > this.maxDestinationY)
            this.destinationY = this.maxDestinationY;
        if (this.destinationX > this.maxDestinationX)
            this.destinationX = this.maxDestinationX;
    }
}
