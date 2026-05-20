import { Movement } from "./Movement.js";

export class UpMovement implements Movement {
    constructor(
        private x: number,
        private y: number,
        private speed: number
    ) { }

    update(deltaTime: number): void {
        this.y -= this.speed * deltaTime;
    }

    getX(): number { return this.x; }
    getY(): number { return this.y; }
}
