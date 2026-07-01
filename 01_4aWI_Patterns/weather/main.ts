import { WeatherStation } from "./WeatherStation.js";
import { PhoneDisplay } from "./PhoneDisplay.js";
import { WindowDisplay } from "./WindowDisplay.js";

const station = new WeatherStation();

const phone = new PhoneDisplay("Marco");
const window = new WindowDisplay();

station.addObserver(phone);
station.addObserver(window);

// Each temperature change notifies all registered observers.
station.setTemperature(5);
station.setTemperature(22);

// Observers can unsubscribe and stop receiving updates.
station.removeObserver(phone);
station.setTemperature(15);
