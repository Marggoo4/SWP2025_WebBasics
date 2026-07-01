export class PushNotification {
    constructor(deviceId) {
        this.deviceId = deviceId;
    }
    send(message) {
        console.log(`Push to device ${this.deviceId}: ${message}`);
    }
}
