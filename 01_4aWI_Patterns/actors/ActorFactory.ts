import { Actor } from "./Actor.js";
import { Circle } from "./Circle.js";
import { Rectangle } from "./Rectangle.js";
import { SuperCircle } from "./SuperCircle.js";

export type ActorType = "circle" | "rectangle" | "supercircle";

// Factory: one central place that knows how to build the concrete actors.
// Clients ask for a type and get back an Actor, without using "new" themselves.
export class ActorFactory {
  static createActor(type: ActorType, x: number, y: number): Actor {
    switch (type) {
      case "circle":
        return new Circle(x, y, 20);
      case "rectangle":
        return new Rectangle(x, y, 40, 40);
      case "supercircle":
        return new SuperCircle(x, y, 20, 50);
      default:
        throw new Error(`Unknown actor type: ${type}`);
    }
  }
}
