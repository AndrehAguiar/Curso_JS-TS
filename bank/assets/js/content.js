const createDOM = function (tag, id, text) {

    const el = document.createElement(`${tag}`)
    el.id = id;
    el.innerText = text;

    return el;
}

const createForm = function (id, action = '', method = '') {

    const form = document.createElement('form');
    form.id = id;
    form.action = action;
    form.method = method;

    return form;
}

const createInput = function (type, value, name, id, placeholder, required) {

    const input = document.createElement('input');
    input.type = type;
    input.value = value;
    input.name = name;
    input.id = id;
    input.placeholder = placeholder;
    input.required = required;

    return input;
}

const createLabel = function (labelFor, text, id) {

    const label = document.createElement('label');
    label.htmlFor = labelFor;
    label.innerText = text;
    label.id = id;

    return label;
}

const createButton = function (type, value, id, text) {

    const button = document.createElement('button');
    button.value = value;
    button.type = type;
    button.id = id;
    button.innerText = text;

    return button;
}
export { createForm, createInput, createLabel, createDOM, createButton };