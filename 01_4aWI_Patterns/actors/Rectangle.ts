import { Actor } from "./Actor.js";

export class Rectangle implements Actor {
  constructor(
    public x: number,
    public y: number,
    public width: number,
    public height: number,
  ) {}

  render(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = "#66aaff";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  update(deltaTime: number): void {
    this.x += deltaTime * 100;
    this.y += deltaTime * 100;
  }
}
