import { Account } from "./account.js";

class Current extends (Account) {
    constructor(Account, limit) {
        super(Account);
        this.number = Account.number;
        this.balance = Account.balance;
        this.limit = limit;
    }

    getLimit() {
        return Number(this.limit).toFixed(2);
    }

    setLimit(limit) {
        this.limit = Number(limit).toFixed(2);
    }

    withdraw(value) {

        if (Number(value) <= (Number(this.balance) + Number(this.limit)) || (Number(value) <= Number(this.limit))) {

            if (Number(value) > Number(this.balance)) {
                if (Number(this.balance) > 0) {
                    this.limit -= (Number(value) - Number(this.balance));
                } else {
                    this.limit -= Number(value);
                }
            }
            this.accWithdraw(value);

        } else {
            alert('The balance and limit is not enough!');
        }
    }
    deposit(value) {
        if ((this.balance <= 0) || this.limit < 100) {
            this.limit = ((Number(value) + Number(this.limit)) >= 100) ? 100 : (Number(value) + Number(this.limit));
        }
        this.accDeposit(value);
    }
}

export { Current };