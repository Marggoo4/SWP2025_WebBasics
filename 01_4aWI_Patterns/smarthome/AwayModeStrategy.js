// Away mode: minimal heating, only protects against frost.
export class AwayModeStrategy {
    constructor() {
        this.minimum = 12;
    }
    regulateTemperature(currentTemp) {
        if (currentTemp < this.minimum) {
            console.log(`Away: frost protection, heating to ${this.minimum} C (now ${currentTemp} C).`);
        }
        else {
            console.log(`Away: nobody home, heating off (now ${currentTemp} C).`);
        }
    }
}
