import { Game, GameFramework } from "./GameFramework.js";
import { Circle } from "./actors/Circle.js";
import { ActorFactory } from "./actors/ActorFactory.js";
import { RightMovement } from "./movements/RightMovement.js";
import { LeftMovement } from "./movements/LeftMovement.js";
import { UpMovement } from "./movements/UpMovement.js";
import { DownMovement } from "./movements/DownMovement.js";

class MyGame extends Game {
  private circles: Circle[] = [];

  init(): void {
    // Actors are created centrally by the factory instead of calling "new Circle".
    const c1 = ActorFactory.createActor("circle", 400, 100) as Circle;
    c1.setMovement(new RightMovement(400, 100, 120));

    const c2 = ActorFactory.createActor("circle", 400, 200) as Circle;
    c2.setMovement(new LeftMovement(400, 200, 120));

    const c3 = ActorFactory.createActor("circle", 100, 300) as Circle;
    c3.setMovement(new DownMovement(100, 300, 120));

    const c4 = ActorFactory.createActor("circle", 700, 300) as Circle;
    c4.setMovement(new UpMovement(700, 300, 120));

    this.circles = [c1, c2, c3, c4];
  }

  update(deltaTime: number): void {
    for (const c of this.circles) c.update(deltaTime);
  }

  render(ctx: CanvasRenderingContext2D): void {
    for (const c of this.circles) c.render(ctx);
  }
}

const game = new MyGame();
const framework = new GameFramework(game, 800, 600);
framework.start();
