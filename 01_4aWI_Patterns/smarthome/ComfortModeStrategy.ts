import { HeatingStrategy } from "./HeatingStrategy.js";

// Comfort mode: keeps the temperature ideal for living.
export class ComfortModeStrategy implements HeatingStrategy {
  private readonly target = 22;

  regulateTemperature(currentTemp: number): void {
    if (currentTemp < this.target) {
      console.log(`Comfort: heating to ${this.target} C (now ${currentTemp} C).`);
    } else {
      console.log(`Comfort: comfortable, holding ${this.target} C (now ${currentTemp} C).`);
    }
  }
}
