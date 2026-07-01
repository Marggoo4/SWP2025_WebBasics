import { NotificationStrategy } from "./NotificationStrategy.js";

export class EmailNotification implements NotificationStrategy {
  constructor(private address: string) { }

  send(message: string): void {
    console.log(`Email to ${this.address}: ${message}`);
  }
}
