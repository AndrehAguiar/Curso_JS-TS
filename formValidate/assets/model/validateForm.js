import { ValidCPF } from './validateCPF.js';

class ValidForm {
    constructor() {
        this.form = document.querySelector('#registerForm');
        this.events();
    }

    events() {
        this.form.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const validInputs = this.isValidInputs();
        const validPassword = this.isValidPassowds();
        console.log('Form submitted', validPassword, validInputs);

        if (validInputs && validPassword) {
            alert('Form submitted');
            this.form.submit();
        }
    }

    isValidPassowds() {
        let isValid = true;

        const passowrd = this.form.querySelector('.inpPassword');
        const rePassowrd = this.form.querySelector('.inpConfirmPass');

        if (passowrd.value !== rePassowrd.value) {
            isValid = false;
            this.createError(passowrd, 'Passwords are not the same.');
            this.createError(rePassowrd, 'Passwords are not the same.');
        }

        if (passowrd.value.length < 6 || passowrd.value.length > 12) {
            isValid = false;
            this.createError(passowrd, 'Password must be 6 to 12 characters long.')
        }
        return isValid;
    }

    isValidInputs() {
        let isValid = true;

        for (let errorText of this.form.querySelectorAll('.errorText')) {
            errorText.remove();
        }

        for (let input of this.form.querySelectorAll('.validate')) {
            const label = input.previousElementSibling.innerText;
            if (!input.value) {
                this.createError(input, `The "${label.slice(0, -1)}" cant be empty.`)
                isValid = false;
            }

            if (input.classList.contains('inpCPF')) {
                if (!this.validateCPF(input)) isValid = false;
            }

            if (input.classList.contains('inpLogin')) {
                if (!this.validateUser(input)) isValid = false;
            }
        }
        return isValid;
    }

    validateUser(input) {
        const user = input.value;
        let isValid = true;

        if (user.length < 3 || user.length > 12) {
            this.createError(input, 'Username must be 3 to 12 characters long.');
            isValid = false;
        }
        if (!user.match(/^[a-zA-Z0-9]+$/g)) {
            this.createError(input, 'Username must have only letters and/or numbers.');
            isValid = false;
        }

        return isValid;
    }

    validateCPF(input) {
        const cpf = new ValidCPF(input.value);

        if (!cpf.validate()) {
            this.createError(input, 'Invalid CPF');
            return false;
        }
        return true;
    }

    createError(input, msg) {
        const div = document.createElement('div');
        div.innerText = msg;
        div.classList.add('errorText');
        input.insertAdjacentElement('afterend', div);
    }
}

export { ValidForm };