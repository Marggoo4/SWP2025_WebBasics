import { Circle } from "./Circle.js";

export class SuperCircle extends Circle {
    constructor(x, y, radius, speed = 50) {
        super(x, y, radius);
        this.speed = speed;
    }
    update(deltaTime) {
        super.update(deltaTime);
    }
}
