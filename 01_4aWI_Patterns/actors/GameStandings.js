// Singleton: there is exactly one score board for the whole game.
// The constructor is private, so the only way to obtain it is getInstance().
export class GameStandings {
    constructor(x = 10, y = 20) {
        this.x = x;
        this.y = y;
        this.score = 0;
    }
    static getInstance() {
        if (GameStandings.instance === null) {
            GameStandings.instance = new GameStandings();
        }
        return GameStandings.instance;
    }
    increaseScore(amount) {
        this.score += amount;
    }
    getScore() {
        return this.score;
    }
    render(ctx) {
        ctx.fillStyle = "black";
        ctx.font = "20px Arial";
        ctx.fillText(`Score: ${this.score}`, this.x, this.y);
    }
    update(deltaTime) { }
}
GameStandings.instance = null;
