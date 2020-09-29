import { createContent } from './index.js';
import { accountForm, accessForm } from './form.js';

document.addEventListener('DOMContentLoaded', function () {

    createContent();

    const container = document.querySelector('.container');
    const option = document.getElementById('option');

    option.addEventListener('click', function (e) {

        const access = document.querySelector('#formAccess');
        const account = document.querySelector('#formAccount');

        const optUser = e.target.id;

        const check = this.querySelector(`#${optUser} input`);
        check.checked = true;

        switch (optUser) {
            case 'newAccount':
                try {
                    container.removeChild(access);
                } catch (e) {

                }
                accountForm();
                break;
            case 'accAccount':
                try {
                    container.removeChild(account);
                } catch (e) {

                }
                accessForm();
                break;
        }

    });

});