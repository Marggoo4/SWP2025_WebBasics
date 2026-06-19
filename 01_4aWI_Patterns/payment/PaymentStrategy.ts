// Strategy interface: every payment method must be able to pay an amount.
export interface PaymentStrategy {
  pay(amount: number): void;
}
