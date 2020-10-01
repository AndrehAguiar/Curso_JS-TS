import { Pessoa } from './pessoa.js';

class Account extends (Pessoa) {
    constructor(Pessoa, number, balance, date) {
        super(Pessoa);
        this.name = Pessoa.name;
        this.id = Pessoa.id;
        this.number = number;
        this.balance = balance;
        this.date = date;
    }

    getNumber() {
        return this.number;
    }

    getBalance() {
        return this.balance;
    }

    getDate() {
        return this.date;
    }

    setNumber(number) {
        this.number = number;
    }

    setBalance(balance) {
        this.balance = balance;
    }

    setDate() {
        const date = new Date();
        date.setHours(date.getHours() - 3);
        this.date = date;
    }

    accDeposit(value) {
        this.balance = (Number(this.balance) + Number(value)).toFixed(2);
        this.setDate();
    }

    accWithdraw(value) {
        Number(this.balance -= value).toFixed(2);
        this.setDate();
    }

    createNumber() {
        let numberAccount = '';
        for (let i = 0; i < 6; i++) {
            numberAccount += String(Math.floor(Math.random() * 10));
        }
        this.setNumber(numberAccount);
        this.setBalance(0);
        this.setDate();
    }

}

export { Account };