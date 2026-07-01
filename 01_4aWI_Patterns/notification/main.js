import { Notifier } from "./Notifier.js";
import { EmailNotification } from "./EmailNotification.js";
import { SmsNotification } from "./SmsNotification.js";
import { PushNotification } from "./PushNotification.js";
// The channel is chosen by the client and injected into the notifier.
const notifier = new Notifier(new EmailNotification("marco@example.com"));
notifier.notify("Your order has been shipped.");
// Switching the channel at runtime requires no change to Notifier.
notifier.setStrategy(new SmsNotification("+43 660 1234567"));
notifier.notify("Your parcel arrives today.");
notifier.setStrategy(new PushNotification("device-42"));
notifier.notify("You earned a new achievement!");
