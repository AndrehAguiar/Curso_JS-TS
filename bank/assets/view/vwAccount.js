import { createResume, createCurrent, createSavings } from "../js/index.js";
import { bankForm } from "../js/form.js";
import { getSession, getAccess } from "../control/ctrlAccess.js";


const resumeAccount = function () {

    const session = getSession();
    getAccess(session);

    const container = document.querySelector('.container');

    const access = document.querySelector('#accAccount input');
    access.checked = true;

    const formAccount = document.querySelector('#optAccount');

    if (!formAccount) {
        createResume();
        const balance = document.querySelector('#content #spnBalance');
        balance.innerText += session.balance.toFixed(2);
        try {
            container.removeChild(btnLogout);
        } catch (err) {

        }
    }

    const optAccount = document.querySelector('#optAccount');

    optAccount.addEventListener('click', function (e) {

        const formBank = document.querySelector('#bankForm');

        const optAccount = e.target.id;

        const check = this.querySelector(`#${optAccount} input`);
        check.checked = true;

        switch (optAccount) {

            case 'inpSavings':
                createSavings();
                break;

            case 'inpCurrent':
                createCurrent();
                break;

        }
        if (formBank === null) bankForm();
    });

}

export { resumeAccount };