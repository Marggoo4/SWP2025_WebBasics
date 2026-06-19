// Context: holds a payment strategy and delegates to it.
// It never instantiates concrete strategies itself (Open/Closed Principle).
export class PaymentContext {
    constructor(strategy) {
        this.strategy = strategy;
    }
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    checkout(amount) {
        this.strategy.pay(amount);
    }
}
