export class PhoneDisplay {
    constructor(owner) {
        this.owner = owner;
    }
    update(temperature) {
        console.log(`${this.owner}'s phone shows ${temperature} °C`);
    }
}
