import { PaymentStrategy } from "./PaymentStrategy.js";

export class BankTransferPayment implements PaymentStrategy {
  constructor(private iban: string) { }

  pay(amount: number): void {
    console.log(`Paid ${amount.toFixed(2)} EUR by bank transfer to ${this.iban}.`);
  }
}
