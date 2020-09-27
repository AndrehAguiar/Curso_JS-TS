document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.container');

    const h1 = document.createElement('h1');
    const input = document.createElement('input');
    const span = document.createElement('span');
    const button = document.createElement('button');

    h1.innerText = 'CPF Validator';

    input.id = 'inpCPF';
    input.type = 'text';
    input.placeholder = '___.___.___-__';
    input.required = 'required';
    input.maxLength = 14;
    input.minLength = 14;
    input.pattern = '[0-9]{3}[\.][0-9]{3}[\.][0-9]{3}[\-][0-9]{2}';


    button.id = 'generate';
    button.innerText = 'Generate';
    button.type = 'button';

    span.id = 'validate';

    container.appendChild(h1);
    container.appendChild(input);
    container.appendChild(button);
    container.appendChild(span);

    const inpCPF = document.querySelector('#inpCPF');
    const spanValid = document.querySelector('#validate');
    const generate = document.querySelector('#generate');

    generate.addEventListener('click', function (e) {
        const len = 9;
        let cpf = '';
        for (let i = 0; i < 9; i++) {
            cpf += `${Math.floor(Math.random() * 10)}`;
        }

        cpf += checkCPF(cpf, 0, true);
        cpf += checkCPF(cpf, 1, true);
        checkCPF(cpf);
        inpCPF.value = cpf;
        formatCPF(cpf);
    })

    inpCPF.addEventListener('keyup', function () {
        const cpf = inpCPF.value.replace(/\D+/g, '');
        formatCPF(cpf);
        if (cpf.length == 11) checkCPF(cpf);
    })

    const formatCPF = function (cpf) {
        inpCPF.value = cpf;
        if (cpf.length === 3) inpCPF.value = `${cpf}.`;
        if (cpf.length === 6) inpCPF.value = `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.`;
        if (cpf.length === 10) inpCPF.value = `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6, 9)}-`;
        if (cpf.length >= 10) inpCPF.value = `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6, 9)}-${cpf.slice(9, 12)}`;
    }

    const checkCPF = function (cpf, step = 0, generate = false) {

        const cpfArr = Array.from(cpf).slice(0, 9 + step);

        let increment = cpfArr.length + 1;

        const check = cpfArr.reduce((accumulator, value) => {
            accumulator += (value * increment);
            increment--;
            return accumulator;
        }, 0);

        let digit = (11 - (check % 11));
        digit = digit > 9 ? 0 : digit;
        if (generate) return digit;

        let chkDigit = cpf.charAt(cpfArr.length);

        cpfArr.push(digit);
        const result = digit == chkDigit;
        result && cpfArr.length < 11 ? checkCPF(cpf, step = 1) : validate(result);
    }

    const validate = function (result) {
        if (result) {
            inpCPF.style.backgroundColor = 'yellowgreen';
            spanValid.innerText = 'Valid CPF';
            spanValid.style.color = 'green';
        } else {
            inpCPF.style.backgroundColor = 'tomato';
            spanValid.innerText = 'Invalid CPF';
            spanValid.style.color = 'red';
        }
    }

})