import { Pessoa } from '../model/pessoa.js';
import { Account } from '../model/account.js';

const getAccounts = function () {
    const clients = JSON.parse(localStorage.getItem('Client'));
    return clients === null ? {} : clients;
}

const getClient = function (clientName, numAccount) {
    const clients = getAccounts();
    const client = clients[numAccount]
    const check = clientName === client.name && numAccount === client.number;
    return check ? client : null;
}

const registerPessoa = function (clients) {
    let users = JSON.stringify(clients);
    localStorage.setItem('Client', users);
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

    });
}

export { setAccount, getClient };