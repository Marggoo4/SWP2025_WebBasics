import { WeatherObserver } from "./WeatherObserver.js";

// Subject: keeps a list of observers and notifies them when the temperature changes.
export class WeatherStation {
  private observers: WeatherObserver[] = [];
  private temperature = 0;

  addObserver(observer: WeatherObserver): void {
    this.observers.push(observer);
  }

  removeObserver(observer: WeatherObserver): void {
    this.observers = this.observers.filter((o) => o !== observer);
  }

  setTemperature(temperature: number): void {
    this.temperature = temperature;
    this.notifyObservers();
  }

  private notifyObservers(): void {
    for (const observer of this.observers) {
      observer.update(this.temperature);
    }
  }
}
