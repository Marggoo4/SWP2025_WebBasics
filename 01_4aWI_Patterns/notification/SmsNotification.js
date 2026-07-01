export class SmsNotification {
    constructor(phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
    send(message) {
        console.log(`SMS to ${this.phoneNumber}: ${message}`);
    }
}
