import { Game } from "./game.js";

export class Enemy {
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
        const scale = 0.5;

        const scaledWidth = this.frameWidth * scale;
        const scaledHeight = this.frameHeight * scale;

        const destinationX =
            this.destinationX + (this.frameWidth - scaledWidth) / 2;
        const destinationY =
            this.destinationY + (this.frameHeight - scaledHeight) / 2;

        this.ctx.drawImage(
            this.image,
            this.sourceX,
            this.sourceY,
            this.frameWidth,
            this.frameHeight,
            destinationX,
            destinationY,
            scaledWidth,
            scaledHeight
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

export class EnemyPool {
    /**
     *
     * @param {Game} game
     */
    constructor(game) {
        this.game = game;
        this.enemy = [];
        this.resetTimer();
    }

    render(timeStamp, deltaTime) {
        if (this.timer > this.nextTime) {
            this.activateEnemy();
            this.resetTimer();
        } else {
            this.timer += deltaTime;
        }

        for (const activeEnemy of this.enemy.filter((bs) => bs.isActive)) {
            activeEnemy.render(timeStamp, deltaTime);
        }
    }

    activateEnemy() {
        const enemy = this.enemy.find((bs) => !bs.isActive);
        if (enemy) {
            enemy.reset();
        } else {
            this.enemy.push(new Enemy(this.game));
        }
    }
}
