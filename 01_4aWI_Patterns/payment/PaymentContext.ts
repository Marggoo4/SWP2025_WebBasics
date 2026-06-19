import { PaymentStrategy } from "./PaymentStrategy.js";

// Context: holds a payment strategy and delegates to it.
// It never instantiates concrete strategies itself (Open/Closed Principle).
export class PaymentContext {
  private strategy: PaymentStrategy;

  constructor(strategy: PaymentStrategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: PaymentStrategy): void {
    this.strategy = strategy;
  }

  checkout(amount: number): void {
    this.strategy.pay(amount);
  }
}
