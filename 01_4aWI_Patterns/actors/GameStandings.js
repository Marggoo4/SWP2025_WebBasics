// Singleton: there is exactly one score board for the whole game.
// The constructor is private, so the only way to obtain it is getInstance().
// As a Subject it notifies registered observers whenever the score changes.
export class GameStandings {
    constructor(x = 10, y = 20) {
        this.x = x;
        this.y = y;
        this.score = 0;
        this.observers = [];
    }
    static getInstance() {
        if (GameStandings.instance === null) {
            GameStandings.instance = new GameStandings();
        }
        return GameStandings.instance;
    }
    addObserver(observer) {
        this.observers.push(observer);
    }
    removeObserver(observer) {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }
    notifyObservers() {
        for (const observer of this.observers) {
            observer.update(this.score);
        }
    }
    increaseScore(amount) {
        this.score += amount;
        this.notifyObservers();
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
