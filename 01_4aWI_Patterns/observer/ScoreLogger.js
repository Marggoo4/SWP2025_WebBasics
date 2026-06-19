// Concrete observer: logs every score change to the console.
export class ScoreLogger {
    constructor(name) {
        this.name = name;
    }
    update(score) {
        console.log(`[${this.name}] score changed to ${score}.`);
    }
}
