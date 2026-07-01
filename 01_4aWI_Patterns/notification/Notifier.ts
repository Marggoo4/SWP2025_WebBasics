import { NotificationStrategy } from "./NotificationStrategy.js";

// Context: holds a notification strategy and delegates to it.
// It never instantiates concrete strategies itself (Open/Closed Principle).
export class Notifier {
  private strategy: NotificationStrategy;

  constructor(strategy: NotificationStrategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: NotificationStrategy): void {
    this.strategy = strategy;
  }

  notify(message: string): void {
    this.strategy.send(message);
  }
}
