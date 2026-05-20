// MyGame - Example implementation of Game interface
import { Game, GameFramework } from "./GameFramework.js";
import { Rectangle } from "./actors/Rectangle.js";
class MyGame extends Game {
    constructor() {
        super(...arguments);
        this.rect1 = null;
    }
    init() {
        console.log("Game initialized");
        this.rect1 = new Rectangle(100, 100, 50, 50);
    }
    update(deltaTime) {
        console.log("update:", deltaTime);
        this.rect1?.update(deltaTime);
    }
    render(ctx) {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.fillStyle = "blue";
        ctx.fillRect(this.x, this.y, 50, 50);
    }
}
const game = new MyGame();
const framework = new GameFramework(game, 800, 600);
framework.start();
console.log("test");
