import { NotificationStrategy } from "./NotificationStrategy.js";

export class SmsNotification implements NotificationStrategy {
  constructor(private phoneNumber: string) { }

  send(message: string): void {
    console.log(`SMS to ${this.phoneNumber}: ${message}`);
  }
}
