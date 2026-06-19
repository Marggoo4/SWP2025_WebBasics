import { HeatingStrategy } from "./HeatingStrategy.js";

// Context: delegates heating decisions to the current strategy.
// The strategy can be swapped at runtime without changing this class (Open/Closed Principle).
export class SmartHomeController {
  private strategy: HeatingStrategy;

  constructor(strategy: HeatingStrategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: HeatingStrategy): void {
    this.strategy = strategy;
  }

  controlHeating(currentTemp: number): void {
    this.strategy.regulateTemperature(currentTemp);
  }
}
