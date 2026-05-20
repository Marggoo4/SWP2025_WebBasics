import { Movement } from "./Movement.js";

export class LeftMovement implements Movement {
    constructor(
        private x: number,
        private y: number,
        private speed: number
    ) { }

    update(deltaTime: number): void {
        this.x -= this.speed * deltaTime;
    }

    getX(): number { return this.x; }
    getY(): number { return this.y; }
}
