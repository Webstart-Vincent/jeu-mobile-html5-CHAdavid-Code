export class InputHandler {
    constructor() {
        /** @type {Set<Key>} */ this.keys = new Set();

        // Ajouter les touches pressées à keys
        window.addEventListener("keydown", ({ code }) => {
            if (Object.keys(Key).includes(code)) this.keys.add(code);
        });
        // Supprimer les touches relevées à keys
        window.addEventListener("keyup", ({ code }) => this.keys.delete(code));
    }
}

// Enumération JS

export const Key = Object.freeze({
    ArrowDown: "ArrowDown",
    ArrowUp: "ArrowUp",
    ArrowLeft: "ArrowLeft",
    ArrowRight: "ArrowRight",
    Space: "Space",
    Enter: "Enter",
});
