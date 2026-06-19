import { PaymentStrategy } from "./PaymentStrategy.js";

export class PayPalPayment implements PaymentStrategy {
  constructor(private email: string) { }

  pay(amount: number): void {
    console.log(`Paid ${amount.toFixed(2)} EUR via PayPal account ${this.email}.`);
  }
}
