import { getClient } from './ctrlAccount.js';

const setAccess = function (element) {
    element.addEventListener('submit', function (e) {

        e.preventDefault();

        const clientName = e.target.children['inpName'].value;
        const numAccount = e.target.children['inpAccount'].value;

        const client = getClient(clientName, numAccount);
        console.log(client);

    });
}
export { setAccess };