import { Shape } from "./Shape.js";
import { Circle } from "./Circle.js";
import { Square } from "./Square.js";
import { Rectangle } from "./Rectangle.js";

export type ShapeType = "circle" | "square" | "rectangle";

// Factory: one central place that knows how to build the concrete shapes.
// Clients ask for a type and get back a Shape, without using "new" themselves.
export class ShapeFactory {
  static createShape(type: ShapeType, ...sizes: number[]): Shape {
    switch (type) {
      case "circle":
        return new Circle(sizes[0]);
      case "square":
        return new Square(sizes[0]);
      case "rectangle":
        return new Rectangle(sizes[0], sizes[1]);
      default:
        throw new Error(`Unknown shape type: ${type}`);
    }
  }
}
