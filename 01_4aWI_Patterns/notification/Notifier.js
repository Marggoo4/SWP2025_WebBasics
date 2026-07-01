// Context: holds a notification strategy and delegates to it.
// It never instantiates concrete strategies itself (Open/Closed Principle).
export class Notifier {
    constructor(strategy) {
        this.strategy = strategy;
    }
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    notify(message) {
        this.strategy.send(message);
    }
}
