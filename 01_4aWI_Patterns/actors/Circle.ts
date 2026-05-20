import { Actor } from "./Actor.js";
import { Movement } from "../movements/Movement.js";
import { RightMovement } from "../movements/RightMovement.js";

export class Circle implements Actor {
  private movement: Movement;

  constructor(
    public x: number,
    public y: number,
    public radius: number,
  ) {
    this.movement = new RightMovement(x, y, 100);
  }

  setMovement(movement: Movement): void {
    this.movement = movement;
  }

  render(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = "#ff6666";
    ctx.beginPath();
    ctx.arc(this.movement.getX(), this.movement.getY(), this.radius, 0, Math.PI * 2);
    ctx.fill();
  }

  update(deltaTime: number): void {
    this.movement.update(deltaTime);
  }
}
