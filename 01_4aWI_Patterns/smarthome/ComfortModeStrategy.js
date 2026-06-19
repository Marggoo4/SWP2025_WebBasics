// Comfort mode: keeps the temperature ideal for living.
export class ComfortModeStrategy {
    constructor() {
        this.target = 22;
    }
    regulateTemperature(currentTemp) {
        if (currentTemp < this.target) {
            console.log(`Comfort: heating to ${this.target} C (now ${currentTemp} C).`);
        }
        else {
            console.log(`Comfort: comfortable, holding ${this.target} C (now ${currentTemp} C).`);
        }
    }
}
