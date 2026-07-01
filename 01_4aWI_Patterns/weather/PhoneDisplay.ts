import { WeatherObserver } from "./WeatherObserver.js";

export class PhoneDisplay implements WeatherObserver {
  constructor(private owner: string) { }

  update(temperature: number): void {
    console.log(`${this.owner}'s phone shows ${temperature} °C`);
  }
}
