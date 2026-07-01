// Subject: keeps a list of observers and notifies them when the temperature changes.
export class WeatherStation {
    constructor() {
        this.observers = [];
        this.temperature = 0;
    }
    addObserver(observer) {
        this.observers.push(observer);
    }
    removeObserver(observer) {
        this.observers = this.observers.filter((o) => o !== observer);
    }
    setTemperature(temperature) {
        this.temperature = temperature;
        this.notifyObservers();
    }
    notifyObservers() {
        for (const observer of this.observers) {
            observer.update(this.temperature);
        }
    }
}
