import { Account } from "./account.js";

class Savings extends (Account) {
    constructor(Account, income) {
        super(Account);
        this.number = Account.number;
        this.balance = Account.balance;
        this.date = Account.date;
        this.income = income;

    }

    getIncome() {
        return this.income;
    }

    setIncome(income) {
        this.income = income;
    }

    sumIncome() {
        const now = new Date();
        const lastMoviment = new Date(this.date);
        console.log(now.getMilliseconds() - lastMoviment.getMilliseconds());
        //this.income = this.balance
    }
}

export { Savings };