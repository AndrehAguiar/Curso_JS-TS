
import { getClient } from './ctrlAccount.js';
import { resumeAccount } from '../view/vwAccount.js'

const getSession = function () {

    const strAccess = localStorage.getItem('Access');
    if (!strAccess) return false;
    const access = JSON.parse(strAccess);
    return access;
}

const checkAccess = function () {

    const access = getSession();

    if (!access) return true;

    const date = new Date(access.date);
    date.setHours(date.getHours + 3)
    const now = new Date();
    now.setHours(now.getHours + 3)

    now.setHours(now.getHours() - 1);

    return now > date;
}

const revokAccess = function () {
    localStorage.removeItem('Access');
}

const getAccess = function (access) {
    const subTitle = document.querySelector('#subTitle');
    subTitle.innerText = `Olá, ${access.Account.name}!`;
}

const setLogout = function (element) {
    element.addEventListener('click', function (e) {

        e.preventDefault();
        revokAccess();
        window.location.reload();
    });
}

const setAccess = function (element) {
    element.addEventListener('submit', function (e) {

        e.preventDefault();

        const clientName = e.target.children['inpName'].value;
        const numAccount = e.target.children['inpAccount'].value;

        const access = getClient(clientName, numAccount);

        const elChild = document.querySelector(`#${e.target.id}`);
        elChild.remove(elChild);

        setUserAccess(access);
    });
}

const setUserAccess = function (access) {
    if (!access) return;
    access.registerAccess(access);
    getAccess(access);
    resumeAccount();

}

export { setAccess, setLogout, getAccess, setUserAccess, checkAccess, revokAccess, getSession };