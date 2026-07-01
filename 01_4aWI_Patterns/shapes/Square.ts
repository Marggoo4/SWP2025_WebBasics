import { Shape } from "./Shape.js";

export class Square implements Shape {
  constructor(private side: number) { }

  area(): number {
    return this.side * this.side;
  }

  describe(): string {
    return `Square (side=${this.side}) with area ${this.area().toFixed(2)}`;
  }
}
