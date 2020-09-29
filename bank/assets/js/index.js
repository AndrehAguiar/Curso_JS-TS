import { createForm, createInput, createLabel } from './form.js';

const createContent = function () {

    const container = document.querySelector('.container');

    const h1 = document.createElement('h1');
    const h2 = document.createElement('h2');

    h1.innerText = 'Bank';
    h2.innerText = 'Select an option';
    h2.id = 'subTitle';

    const formOptions = createForm('option')

    const newAccount = createInput('radio', 'new', 'optAccount', 'newAccount');
    const accAccount = createInput('radio', 'access', 'optAccount', 'accAccount');

    const labelNew = createLabel('newAccount', 'Create Account');
    const labelAcc = createLabel('accAccount', 'Access Account');

    container.appendChild(h1);
    container.appendChild(formOptions);
    formOptions.appendChild(labelAcc);
    labelAcc.appendChild(accAccount);
    formOptions.appendChild(labelNew);
    labelNew.appendChild(newAccount);
    container.appendChild(h2);

};

export { createContent };