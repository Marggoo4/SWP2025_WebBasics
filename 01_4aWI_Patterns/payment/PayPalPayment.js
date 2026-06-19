export class PayPalPayment {
    constructor(email) {
        this.email = email;
    }
    pay(amount) {
        console.log(`Paid ${amount.toFixed(2)} EUR via PayPal account ${this.email}.`);
    }
}
