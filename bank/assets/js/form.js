import { createForm, createInput, createButton, createLabel, createDOM } from '../js/content.js';
import { setAccount } from '../control/ctrlAccount.js';
import { setAccess, setLogout } from '../control/ctrlAccess.js';


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

const bankForm = function () {

    const container = document.querySelector('.container');

    const bankForm = createForm('bankForm', '', 'get');

    const labelWithdraw = createLabel('inpWithdraw', 'Withdraw', 'lblWidraw');
    const inpWithdraw = createInput('number', '', 'withdraw', 'inpWithdraw', '0.00', 'required');
    const bntWithdraw = createButton('submit', 'Withdraw ', 'btnWithdraw', 'Withdraw ');

    const labelDeposit = createLabel('inpDeposit', 'Deposit', 'lblDeposit');
    const inpDeposit = createInput('number', '', 'deposit', 'inpDeposit', '0.00', 'required');
    const bntDeposit = createButton('submit', 'Deposit', 'btnDeposit', 'Deposit');

    const dvInput = createDOM('div', 'dvInput', '');

    container.appendChild(bankForm);
    bankForm.appendChild(labelWithdraw);
    bankForm.appendChild(labelDeposit);
    bankForm.appendChild(dvInput);

    labelWithdraw.addEventListener('click', function (e) {
        const inpDopsit = document.querySelector('#inpDeposit');
        const btnDopsit = document.querySelector('#btnDeposit');
        const formDiv = document.querySelector('#dvInput');
        if (inpDopsit !== null) {
            formDiv.removeChild(inpDopsit);
            formDiv.removeChild(btnDopsit);
        }

        dvInput.appendChild(inpWithdraw);
        dvInput.appendChild(bntWithdraw);
    });

    labelDeposit.addEventListener('click', function (e) {

        const inpWithdraw = document.querySelector('#inpWithdraw');
        const btnWithdraw = document.querySelector('#btnWithdraw');
        const formDiv = document.querySelector('#dvInput');

        if (inpWithdraw !== null) {
            formDiv.removeChild(inpWithdraw);
            formDiv.removeChild(btnWithdraw);
        }

        dvInput.appendChild(inpDeposit);
        dvInput.appendChild(bntDeposit);
    });

}

const logoutForm = function () {

    const container = document.querySelector('.container');
    const logoutButton = document.querySelector('.container #btnLogout');
    try {
        container.removeChild(content);
        container.removeChild(optAccount);
    } catch (err) {

    }
    if (logoutButton !== null) return;
    const btnLogout = createButton('submit', 'Logout', 'btnLogout', 'Logout');

    container.appendChild(btnLogout);
    setLogout(btnLogout);

    subTitle.innerText = 'Logout first'
}

export { accountForm, accessForm, logoutForm, bankForm };