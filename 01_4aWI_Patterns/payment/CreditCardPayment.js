export class CreditCardPayment {
    constructor(cardNumber, holder) {
        this.cardNumber = cardNumber;
        this.holder = holder;
    }
    pay(amount) {
        console.log(`Paid ${amount.toFixed(2)} EUR with credit card ${this.cardNumber} (${this.holder}).`);
    }
}
