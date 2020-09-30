import { Pessoa } from '../model/pessoa.js';
import { Account } from '../model/account.js';
import { setUserAccess } from './ctrlAccess.js';

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

    if (!client) alert('Account not found!');

    const check = clientName === client.name && numAccount === client.number;
    const account = check ? client : false;
    return account;
}

const setAccount = function (element) {
    element.addEventListener('submit', function (e) {

        e.preventDefault();

        const clients = getAccounts();

        const name = e.target.children['inpName'].value;
        const id = e.target.children['inpID'].value;

        const user = new Pessoa(name, id);
        const account = new Account(user)

        account.createNumber();
        clients[account.number] = account;

        registerPessoa(clients);

        const elChild = document.querySelector(`#${e.target.id}`);
        elChild.remove(elChild);

        setUserAccess(account);

    });
}

export { setAccount, getClient };