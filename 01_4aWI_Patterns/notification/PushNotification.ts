import { NotificationStrategy } from "./NotificationStrategy.js";

export class PushNotification implements NotificationStrategy {
  constructor(private deviceId: string) { }

  send(message: string): void {
    console.log(`Push to device ${this.deviceId}: ${message}`);
  }
}
