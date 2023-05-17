import { Game } from "./game.js";

export class enemy {
    sourceX = 0;
    sourceY = 0;

    fps = 1000 / 12;
    framesLength = 1;

    /**
     * @param {Game} game
     */
    constructor(game) {
        this.image = new Image();
        this.image.src = "./assets/img/ghost-spritesheet.png";

        this.ctx = game.ctx;

        const { canvas } = game;
        this.canvasWidth = canvas.width;
        this.canvasHeight = canvas.height;

        this.frameWidth = 231;
        this.frameHeight = 178;

        this.reset();
    }

    render = (timeStamp, deltaTime) => {
        this.draw();
        this.update(timeStamp, deltaTime);
    };

    draw() {
        this.ctx.drawImage(
            this.image,
            this.sourceX,
            this.sourceY,
            this.frameWidth,
            this.frameHeight,
            this.destinationX,
            this.destinationY,
            this.frameWidth,
            this.frameHeight
        );
    }

    /**
     * @param {number} timeStamp
     * @param {number} deltaTime
     */
    update(timeStamp, deltaTime) {
        const frameIndex = Math.floor(timeStamp / this.fps) % this.framesLength;
        this.sourceX = frameIndex * this.frameWidth;

        this.destinationX -= (deltaTime * this.speed) / 1000;
        if (this.destinationX <= -this.frameWidth) this.isActive = false;
    }

    reset() {
        this.isActive = true;
        this.destinationX = this.canvasWidth;
        this.destinationY =
            Math.random() * (this.canvasHeight - this.frameHeight);
        this.speed = Math.random() * 50 + 100;
    }
}

activateEnemy = () => {
    const enemy = this.enemy.find((bs) => !bs.isActive);
    if (enemy) enemy.reset();
    else this.enemy.push(new enemy(this.game));
};
