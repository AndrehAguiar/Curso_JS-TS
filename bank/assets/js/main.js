import { createContent } from './index.js';
import { accountForm, accessForm, logoutForm } from './form.js';
import { checkAccess, revokAccess } from '../control/ctrlAccess.js';
import { resumeAccount } from '../view/vwAccount.js';

document.addEventListener('DOMContentLoaded', function () {

    if (checkAccess()) revokAccess();

    createContent();

    const container = document.querySelector('.container');
    const option = document.getElementById('option');

    option.addEventListener('click', function (e) {

        const formBank = document.querySelector('#bankForm');

        const access = document.querySelector('#formAccess');
        const account = document.querySelector('#formAccount');

        const optUser = e.target.id;

        const check = this.querySelector(`#${optUser} input`);
        check.checked = true;

        switch (optUser) {

            case 'newAccount':
                if (access !== null) container.removeChild(access);
                if (formBank !== null) container.removeChild(formBank);
                checkAccess() ? accountForm() : logoutForm();
                break;

            case 'accAccount':
                if (account !== null) container.removeChild(account);
                if (formBank !== null) container.removeChild(formBank);
                checkAccess() ? accessForm() : resumeAccount();
                break;
        }

    });

});