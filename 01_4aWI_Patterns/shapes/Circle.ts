import { Shape } from "./Shape.js";

export class Circle implements Shape {
  constructor(private radius: number) { }

  area(): number {
    return Math.PI * this.radius * this.radius;
  }

  describe(): string {
    return `Circle (r=${this.radius}) with area ${this.area().toFixed(2)}`;
  }
}
