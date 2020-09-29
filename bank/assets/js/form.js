import { setAccount } from '../control/ctrlAccount.js';
import { setAccess } from '../control/ctrlAccess.js';

const createForm = function (id, action = '', method = '') {

    const form = document.createElement('form');
    form.id = id;
    form.action = action;
    form.method = method;

    return form;
}

const createInput = function (type, value, name, id, placeholder, required) {

    const input = document.createElement('input');
    input.type = type;
    input.value = value;
    input.name = name;
    input.id = id;
    input.placeholder = placeholder;
    input.required = required;

    return input;
}

const createLabel = function (labelFor, text) {

    const label = document.createElement('label');
    label.htmlFor = labelFor;
    label.innerText = text;
    label.id = labelFor;

    return label;
}

const createButton = function (type, value, id, text) {

    const button = document.createElement('button');
    button.value = value;
    button.type = type;
    button.id = id;
    button.innerText = text;

    return button;
}

const accountForm = function () {
    const container = document.querySelector('.container');
    const subTitle = document.querySelector('#subTitle');

    const formAccount = createForm('formAccount', '', 'get');
    const inpName = createInput('text', '', 'nameAccount', 'inpName', 'Enter your name', 'required')
    const inpAccount = createInput('text', '', 'numID', 'inpID', 'Enter ID number', 'required')
    const bntSubmit = createButton('submit', 'Create', 'btnAccount', 'Create');

    container.appendChild(formAccount);
    formAccount.appendChild(inpName);
    formAccount.appendChild(inpAccount);
    formAccount.appendChild(bntSubmit);
    setAccount(formAccount);

    subTitle.innerText = 'Create new account';
}

const accessForm = function () {
    const container = document.querySelector('.container');
    const subTitle = document.querySelector('#subTitle');

    const formAccess = createForm('formAccess');
    const inpName = createInput('text', '', 'nameAccount', 'inpName', 'Enter your name', 'required')
    const inpAccount = createInput('text', '', 'numAccount', 'inpAccount', 'Enter the account number', 'required')
    const bntSubmit = createButton('submit', 'Access', 'btnAccess', 'Access');

    container.appendChild(formAccess);
    formAccess.appendChild(inpName);
    formAccess.appendChild(inpAccount);
    formAccess.appendChild(bntSubmit);
    setAccess(formAccess);

    subTitle.innerText = 'Access account'
}

export { createForm, createInput, createLabel, accountForm, accessForm };