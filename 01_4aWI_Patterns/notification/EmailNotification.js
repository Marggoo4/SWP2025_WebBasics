export class EmailNotification {
    constructor(address) {
        this.address = address;
    }
    send(message) {
        console.log(`Email to ${this.address}: ${message}`);
    }
}
