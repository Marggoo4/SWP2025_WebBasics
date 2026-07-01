export class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
    describe() {
        return `Rectangle (${this.width}x${this.height}) with area ${this.area().toFixed(2)}`;
    }
}
