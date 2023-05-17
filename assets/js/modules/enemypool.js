import { Game } from "../modules/game.js";
import { Enemy } from "./enemy.js";

export class EnemyPool {
    /**
     *
     * @param {Game} game
     */
    constructor(game) {
        this.game = game;

        /**@type {Enemy[]} */
        this.enemy = [];

        this.resetTimer();
    }

    resetTimer() {
        this.timer = 0;
        this.nexTime = Math.random() * 500 + 1500; // Random number between 1500 and 2000
    }

    render(timeStamp, deltaTime) {
        if (this.timer > this.nexTime) {
            this.activateEnemy();
            this.resetTimer();
        } else {
            this.timer += deltaTime;
        }

        for (const activeEnemy of this.enemy.filter((bs) => bs.isActive))
            activeEnemy.render(timeStamp, deltaTime);
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
