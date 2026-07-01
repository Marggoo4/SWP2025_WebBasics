import { Shape } from "./Shape.js";

export class Rectangle implements Shape {
  constructor(
    private width: number,
    private height: number,
  ) { }

  area(): number {
    return this.width * this.height;
  }

  describe(): string {
    return `Rectangle (${this.width}x${this.height}) with area ${this.area().toFixed(2)}`;
  }
}
