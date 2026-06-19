// Bonus strategy: heats according to the time of day.
// Warm during the day (6:00-22:00), cooler at night.
export class ScheduleBasedStrategy {
    constructor(hour) {
        this.hour = hour;
    }
    regulateTemperature(currentTemp) {
        const target = this.hour >= 6 && this.hour < 22 ? 21 : 17;
        if (currentTemp < target) {
            console.log(`Schedule (${this.hour}:00): heating to ${target} C (now ${currentTemp} C).`);
        }
        else {
            console.log(`Schedule (${this.hour}:00): target ${target} C reached (now ${currentTemp} C).`);
        }
    }
}
