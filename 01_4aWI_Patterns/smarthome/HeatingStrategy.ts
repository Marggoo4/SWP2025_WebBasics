// Strategy interface: every heating mode decides how to react to the current temperature.
export interface HeatingStrategy {
  regulateTemperature(currentTemp: number): void;
}
