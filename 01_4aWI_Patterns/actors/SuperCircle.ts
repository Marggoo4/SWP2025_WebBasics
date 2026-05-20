import { Circle } from "./Circle.js";

export class SuperCircle extends Circle {
  constructor(
    x: number,
    y: number,
    radius: number,
    public speed: number = 50,
  ) {
    super(x, y, radius);
  }

  update(deltaTime: number): void {
    super.update(deltaTime);
  }
}
