// Strategy interface: every notification channel must be able to send a message.
export interface NotificationStrategy {
  send(message: string): void;
}
