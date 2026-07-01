// Observer: gets notified whenever the observed temperature changes.
export interface WeatherObserver {
  update(temperature: number): void;
}
