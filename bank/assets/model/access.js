class Access {
    constructor(Account, limit, income) {
        this.Account = Account;
        this.limit = limit;
        this.income = income;
        this.date = this.setDate();
    }

    getLimit() {
        return this.limit;
    }

    getIncome() {
        return this.income;
    }

    setIncome(income) {
        this.income = income;
    }

    setLimit(limit) {
        this.limit = limit;
    }

    setDate() {
        const date = new Date();
        date.setHours(date.getHours() - 3);
        this.date = date;
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