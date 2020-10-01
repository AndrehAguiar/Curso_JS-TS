import { Pessoa } from '../model/pessoa.js';
import { Account } from '../model/account.js';
import { Current } from '../model/accCurrent.js';
import { Savings } from '../model/accSavings.js';
import { Access } from '../model/access.js';
import { setUserAccess, getSession } from './ctrlAccess.js';

const getAccounts = function () {
    const clients = JSON.parse(localStorage.getItem('Client'));
    return clients === null ? {} : clients;
}

const registerPessoa = function (clients) {
    const users = JSON.stringify(clients);
    localStorage.setItem('Client', users);
}

const getClient = function (clientName, numAccount) {

    const clients = getAccounts();
    const client = clients[numAccount]
    if (!client) {
        alert('Account not found!');
        return;
    }

    const check = clientName === client.Account.name && numAccount === client.Account.number;

    if (check) {

        const user = new Pessoa(client.Account.name, client.Account.id);
        const account = new Account(user, client.Account.number, client.Account.balance, client.Account.date);

        const accCurrent = new Current(account, client.limit);
        const accSavings = new Savings(account, client.income);

        accSavings.sumIncome();

        const access = new Access(account, accCurrent.limit, accSavings.income);

        return access;

    } else {
        return false;
    }
}

const setAccount = function (element) {
    element.addEventListener('submit', function (e) {

        e.preventDefault();

        const clients = getAccounts();

        const name = e.target.children['inpName'].value;
        const id = e.target.children['inpID'].value;
        const date = new Date();

        const user = new Pessoa(name, id);
        const account = new Account(user, date)

        account.createNumber();

        const current = new Current(account, 100);
        const savings = new Savings(account, 0);

        const client = new Access(account, current.limit, savings.income);

        clients[account.number] = client;

        registerPessoa(clients);

        const elChild = document.querySelector(`#${e.target.id}`);
        elChild.remove(elChild);

        setUserAccess(client);

    });
}

const updateAccount = function (account, current, session) {

    account.balance = current.balance;

    const client = new Access(account, current.limit, session.income);

    const clients = getAccounts();
    clients[account.number] = client;
    registerPessoa(clients);
    setUserAccess(client);
}

const withdraw = function (value) {
    const session = getSession();
    const account = new Account(session.Account, session.Account.number, session.Account.balance);
    const current = new Current(account, session.limit)
    current.withdraw(value);

    updateAccount(account, current, session);
}

const deposit = function (value) {
    console.log(value);
    const session = getSession();
    const account = new Account(session.Account, session.Account.number, session.Account.balance);
    const current = new Current(account, session.limit)
    current.deposit(value);

    updateAccount(account, current, session);
}

export { setAccount, getClient, withdraw, deposit };