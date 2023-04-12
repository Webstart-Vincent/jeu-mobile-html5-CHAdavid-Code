export class Player {
    sourceX = 0;
    sourceY = 0;
    frameWidth = 116;
    frameHeight = 179;
    destinationX = 25;
    destinationY = 100;

    fps = 1000 / 12; // 1s pour 12 frames (la cadence de l'animation)
    framesLength = 3; // Nombre de frames dans la ligne de la spritesheet
    frameIndex = 0;

    /**
     *
     * @param {CanvasRenderingContext2D} ctx
     */
    constructor(ctx) {
        this.image = new Image();
        this.image.src = "./assets/img/player-spritesheet.png";

        this.ctx = ctx;
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
    }
}
