export class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
    describe() {
        return `Circle (r=${this.radius}) with area ${this.area().toFixed(2)}`;
    }
}
