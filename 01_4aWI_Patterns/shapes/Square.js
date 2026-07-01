export class Square {
    constructor(side) {
        this.side = side;
    }
    area() {
        return this.side * this.side;
    }
    describe() {
        return `Square (side=${this.side}) with area ${this.area().toFixed(2)}`;
    }
}
