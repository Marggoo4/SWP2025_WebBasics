import { PaymentStrategy } from "./PaymentStrategy.js";

export class CreditCardPayment implements PaymentStrategy {
  constructor(
    private cardNumber: string,
    private holder: string,
  ) { }

  pay(amount: number): void {
    console.log(`Paid ${amount.toFixed(2)} EUR with credit card ${this.cardNumber} (${this.holder}).`);
  }
}
