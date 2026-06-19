export class BankTransferPayment {
    constructor(iban) {
        this.iban = iban;
    }
    pay(amount) {
        console.log(`Paid ${amount.toFixed(2)} EUR by bank transfer to ${this.iban}.`);
    }
}
