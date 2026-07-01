import { WeatherObserver } from "./WeatherObserver.js";

export class WindowDisplay implements WeatherObserver {
  update(temperature: number): void {
    const advice = temperature < 10 ? "Close the window." : "You can open the window.";
    console.log(`Window display: ${temperature} °C. ${advice}`);
  }
}
