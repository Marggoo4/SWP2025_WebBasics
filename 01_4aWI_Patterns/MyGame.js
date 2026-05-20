import { Game, GameFramework } from "./GameFramework.js";
import { Circle } from "./actors/Circle.js";
import { RightMovement } from "./movements/RightMovement.js";
import { LeftMovement } from "./movements/LeftMovement.js";
import { UpMovement } from "./movements/UpMovement.js";
import { DownMovement } from "./movements/DownMovement.js";

class MyGame extends Game {
    constructor() {
        super(...arguments);
        this.circles = [];
    }
    init() {
        const c1 = new Circle(400, 100, 20);
        c1.setMovement(new RightMovement(400, 100, 120));

        const c2 = new Circle(400, 200, 20);
        c2.setMovement(new LeftMovement(400, 200, 120));

        const c3 = new Circle(100, 300, 20);
        c3.setMovement(new DownMovement(100, 300, 120));

        const c4 = new Circle(700, 300, 20);
        c4.setMovement(new UpMovement(700, 300, 120));

        this.circles = [c1, c2, c3, c4];
    }
    update(deltaTime) {
        for (const c of this.circles) c.update(deltaTime);
    }
    render(ctx) {
        for (const c of this.circles) c.render(ctx);
    }
}

const game = new MyGame();
const framework = new GameFramework(game, 800, 600);
framework.start();
