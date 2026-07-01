import { ShapeFactory } from "./ShapeFactory.js";
// The client only names the type and passes sizes; the factory builds the object.
const shapes = [
    ShapeFactory.createShape("circle", 5),
    ShapeFactory.createShape("square", 4),
    ShapeFactory.createShape("rectangle", 3, 6),
];
for (const shape of shapes) {
    console.log(shape.describe());
}
