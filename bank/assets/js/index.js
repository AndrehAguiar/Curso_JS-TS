import { createDOM, createForm, createInput, createLabel } from './content.js';

const createContent = function () {

    const container = document.querySelector('.container');

    const h1 = createDOM('h1', '', 'Bank');
    const h2 = createDOM('h2', 'subTitle', 'Select an option');

    const formOptions = createForm('option')

    const newAccount = createInput('radio', 'new', 'optAccount', 'newAccount');
    const accAccount = createInput('radio', 'access', 'optAccount', 'accAccount');

    const labelNew = createLabel('newAccount', 'Create Account', 'newAccount');
    const labelAcc = createLabel('accAccount', 'Access Account', 'accAccount');

    container.appendChild(h1);
    container.appendChild(formOptions);
    formOptions.appendChild(labelAcc);
    labelAcc.appendChild(accAccount);
    formOptions.appendChild(labelNew);
    labelNew.appendChild(newAccount);
    container.appendChild(h2);

};

const createResume = function () {

    const container = document.querySelector('.container');

    const formOptAccount = createForm('optAccount', '', 'get');

    const inpCurrent = createInput('radio', 'current', 'optAccount', 'inpCurrent');
    const inpSavings = createInput('radio', 'savings', 'optAccount', 'inpSavings');

    const labelCurrent = createLabel('inpCurrent', 'Current Account', 'inpCurrent');
    const labelSavings = createLabel('inpSavings', 'Savings Account', 'inpSavings');

    const content = createDOM('div', 'content', '');
    const balance = createDOM('span', 'spnBalance', 'Balance: R$ ')

    container.appendChild(formOptAccount);
    formOptAccount.appendChild(labelCurrent);
    labelCurrent.appendChild(inpCurrent);
    formOptAccount.appendChild(labelSavings);
    labelSavings.appendChild(inpSavings);
    container.appendChild(content);
    content.appendChild(balance);

};

const createCurrent = function (session) {

    const spnLimit = document.querySelector('#spnLimit');
    if (spnLimit !== null) return;

    try {
        content.removeChild(spnIncome);
    } catch (err) { }

    const limit = createDOM('span', 'spnLimit', 'Limit: R$ ');
    content.appendChild(limit);
    limit.innerText += Number(session.limit).toFixed(2);

};

const createSavings = function (session) {

    const spnIncome = document.querySelector('#spnIncome');
    if (spnIncome !== null) return;

    try {
        content.removeChild(spnLimit);
    } catch (err) { }

    const income = createDOM('span', 'spnIncome', 'Income: R$ ');
    content.appendChild(income);
    income.innerText += session.income.toFixed(2);
};

export { createContent, createResume, createCurrent, createSavings };