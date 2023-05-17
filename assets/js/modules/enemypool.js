import { Game } from "../modules/game.js";

export class EnemyPool {
    /**
     *
     * @param {Game} game
     */
    constructor(game) {
        this.game = game;

        /**@type {enemy[]} */
        this.enemy = [];

        this.resetTimer();
    }

    resetTimer = () => {
        this.timer = 0;
        this.nexTime = Math.random() * 500 + 1500; // Nombre aléatoire compris entre 1500 et 2000
    };
    render = () => {
        if (this.timer > this.nexTime) {
            this.resetTimer();
        } else {
            this.timer += deltaTime;
        }
        for (const activeEnemy of this.enemy.filter((bs) => bs.isActive))
            activeEnemy.render();
    };
    activateEnemy = () => {
        const enemy = this.enemy.find((bs) => !bs.isActive);
        if (enemy) enemy.reset();
        else this.enemy.push(new enemy(this.game));
    };
}
