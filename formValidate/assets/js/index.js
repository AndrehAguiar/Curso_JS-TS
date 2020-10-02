import { getForm } from "./form.js";

const createContent = function () {
    const container = document.querySelector('.container');

    let args = { 'id': 'registerForm', 'method': 'get' }
    container.appendChild(getForm.createForm(args));

    args.text = 'Register Form';
    registerForm.appendChild(getForm.createTitle(args));

    args.labelForm = 'inpName';
    args.text = 'Name:';
    registerForm.appendChild(getForm.createLabel(args));

    args = { 'type': 'text', 'id': 'inpName', 'class': 'validate', 'placeholder': 'Enter your name' };
    registerForm.appendChild(getForm.createInput(args));

    args.labelForm = 'inpLastName';
    args.text = 'Last Name:';
    registerForm.appendChild(getForm.createLabel(args));

    args.id = 'inpLastName';
    args.placeholder = 'Enter your last name';
    registerForm.appendChild(getForm.createInput(args));

    args.labelForm = 'inpCPF';
    args.text = 'CPF:';
    registerForm.appendChild(getForm.createLabel(args));

    args.id = 'inpCPF';
    args.placeholder = 'Enter your CPF';
    registerForm.appendChild(getForm.createInput(args));

    args.labelForm = 'inpLogin';
    args.text = 'User Name:';
    registerForm.appendChild(getForm.createLabel(args));

    args.id = 'inpLogin';
    args.placeholder = 'Create a login user';
    registerForm.appendChild(getForm.createInput(args));

    args.labelForm = 'inpPassword';
    args.text = 'Password:';
    registerForm.appendChild(getForm.createLabel(args));

    args.type = 'inpPassword';
    args.id = 'password';
    args.placeholder = 'Create a password';
    registerForm.appendChild(getForm.createInput(args));

    args.labelForm = 'inpConfirmPass';
    args.text = 'Confirm Password:';
    registerForm.appendChild(getForm.createLabel(args));

    args.id = 'inpConfirmPass';
    args.placeholder = 'Retype the password';
    registerForm.appendChild(getForm.createInput(args));

    args.id = 'btnRegister';
    args.text = 'Register';
    args.type = 'submit';
    registerForm.appendChild(getForm.createButton(args));
}
export { createContent };