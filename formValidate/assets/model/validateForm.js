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
        }
    }

    createError(input, msg) {
        const div = document.createElement('div');
        div.innerText = msg;
        div.classList.add('errorText');
        input.insertAdjacentElement('afterend', div);
    }
}

export { ValidForm };