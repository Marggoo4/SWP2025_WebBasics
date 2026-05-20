export class Rectangle {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    render(ctx) {
        ctx.fillStyle = "#66aaff";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    update(deltaTime) {
        this.x += deltaTime * 100;
        this.y += deltaTime * 100;
    }
}
