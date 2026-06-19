// Context: delegates heating decisions to the current strategy.
// The strategy can be swapped at runtime without changing this class (Open/Closed Principle).
export class SmartHomeController {
    constructor(strategy) {
        this.strategy = strategy;
    }
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    controlHeating(currentTemp) {
        this.strategy.regulateTemperature(currentTemp);
    }
}
