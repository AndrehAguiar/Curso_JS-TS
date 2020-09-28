import { ValidCPF } from './cpf.js';

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

        const objCPF = new ValidCPF();
        let cpf = objCPF.generate();
        inpCPF.value = cpf;
        formatCPF(inpCPF.value);
        checkCPF(inpCPF.value)

    })

    inpCPF.addEventListener('keyup', function () {

        const objCPF = new ValidCPF(inpCPF.value);
        formatCPF(objCPF.cpfClean);
        inpCPF.value.length >= 10 ? checkCPF(objCPF.cpfClean) : validate(false);

    });

    const formatCPF = function (cpf) {
        inpCPF.value = cpf;
        if (cpf.length === 3) inpCPF.value = `${cpf}.`;
        if (cpf.length === 6) inpCPF.value = `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.`;
        if (cpf.length === 10) inpCPF.value = `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6, 9)}-`;
        if (cpf.length >= 10) inpCPF.value = `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6, 9)}-${cpf.slice(9, 12)}`;
    }

    const checkCPF = function (cpf) {

        const objCPF = new ValidCPF(cpf);

        validate(objCPF.validate(objCPF.cpfClean));
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