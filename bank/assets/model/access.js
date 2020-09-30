import { Account } from './account.js';

class Access extends (Account) {
    constructor(Account) {
        super(Account);
        this.number = Account.number;
        this.balance = Account.balance;
        this.date = new Date();
    }

    getDate() {
        return this.date;
    }

    registerAccess(access) {
        const strAccess = JSON.stringify(access);
        localStorage.setItem('Access', strAccess);
    }

    checkAccess() {
        const strAccess = localStorage.getItem('Access');
        const access = JSON.parse(strAccess);
        return access;
    }
}
export { Access };