import { RightMovement } from "../movements/RightMovement.js";

export class Circle {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.movement = new RightMovement(x, y, 100);
    }
    setMovement(movement) {
        this.movement = movement;
    }
    render(ctx) {
        ctx.fillStyle = "#ff6666";
        ctx.beginPath();
        ctx.arc(this.movement.getX(), this.movement.getY(), this.radius, 0, Math.PI * 2);
        ctx.fill();
    }
    update(deltaTime) {
        this.movement.update(deltaTime);
    }
}
