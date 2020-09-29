import { Pessoa } from './pessoa.js';

class Account extends (Pessoa) {
    constructor(Pessoa, number, balance) {
        super(Pessoa);
        this.name = Pessoa.name;
        this.id = Pessoa.id;
        this.number = number;
        this.balance = balance;
    }

    getNumber() {
        return this.number;
    }

    getBalance() {
        return this.balance;
    }

    setNumber(number) {
        this.number = number;
    }

    setBalance(balance) {
        this.balance = balance;
    }

    deposit(value) {
        this.setBalance(this.balance += value);
    }

    withdraw(value) {
        this.setBalance(this.balance -= value);
    }

    createNumber() {
        let numberAccount = '';
        for (let i = 0; i < 6; i++) {
            numberAccount += String(Math.floor(Math.random() * 10));
        }
        this.setNumber(numberAccount);
        this.setBalance(0);
    }

}

export { Account };