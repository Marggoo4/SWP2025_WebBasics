import { HeatingStrategy } from "./HeatingStrategy.js";

// Away mode: minimal heating, only protects against frost.
export class AwayModeStrategy implements HeatingStrategy {
  private readonly minimum = 12;

  regulateTemperature(currentTemp: number): void {
    if (currentTemp < this.minimum) {
      console.log(`Away: frost protection, heating to ${this.minimum} C (now ${currentTemp} C).`);
    } else {
      console.log(`Away: nobody home, heating off (now ${currentTemp} C).`);
    }
  }
}
