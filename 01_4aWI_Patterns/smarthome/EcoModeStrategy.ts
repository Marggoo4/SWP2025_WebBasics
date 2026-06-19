import { HeatingStrategy } from "./HeatingStrategy.js";

// Eco mode: saves energy by keeping a low target temperature.
export class EcoModeStrategy implements HeatingStrategy {
  private readonly target = 18;

  regulateTemperature(currentTemp: number): void {
    if (currentTemp < this.target) {
      console.log(`Eco: heating gently to ${this.target} C (now ${currentTemp} C).`);
    } else {
      console.log(`Eco: target reached, heating off (now ${currentTemp} C).`);
    }
  }
}
