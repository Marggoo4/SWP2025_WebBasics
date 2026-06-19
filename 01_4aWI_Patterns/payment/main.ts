import { PaymentContext } from "./PaymentContext.js";
import { CreditCardPayment } from "./CreditCardPayment.js";
import { PayPalPayment } from "./PayPalPayment.js";
import { BankTransferPayment } from "./BankTransferPayment.js";

// The strategy is chosen by the client and injected into the context.
const context = new PaymentContext(new CreditCardPayment("1234-5678-9012-3456", "Marco"));
context.checkout(49.9);

// Switching the payment method at runtime requires no change to PaymentContext.
context.setStrategy(new PayPalPayment("marco@example.com"));
context.checkout(19.99);

context.setStrategy(new BankTransferPayment("AT61 1904 3002 3457 3201"));
context.checkout(120);
