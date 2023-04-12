export class Background {
    destinationX = 0;
    destinationY = 0;
    width = 930;
    speed = 100; // 30px/s

    /**
     * Description
     * @param {CanvasRenderingContext2D} ctx
     */
    constructor(ctx) {
        this.image = new Image();
        this.image.src = "./assets/img/background.jpg";

        this.ctx = ctx;
    }

    draw() {
        this.ctx.drawImage(this.image, this.destinationX, this.destinationY);

        this.ctx.drawImage(
            this.image,
            this.destinationX + this.width,
            this.destinationY
        );
    }

    /**
     * Description
     * @param {number} deltaTime Laps de temps écoulé depuis le dernier
     * update
     */
    update(deltaTime) {
        this.destinationX -= (deltaTime * this.speed) / 1000;
        if (this.destinationX <= -this.width) this.destinationX = 0;
    }
}
