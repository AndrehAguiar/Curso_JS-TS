const getForm = {

    createTitle: function (args) {
        const h1 = document.createElement('h1');
        h1.innerText = args.text;
        return h1;
    },

    createForm(args) {
        const form = document.createElement('form');
        form.id = args.id;
        form.method = args.method;
        return form;
    },

    createLabel(args) {
        const label = document.createElement('label');
        label.for = args.labelFor;
        label.innerText = args.text;
        return label;
    },

    createInput(args) {
        const input = document.createElement('input');
        input.type = args.type;
        input.id = args.id;
        input.placeholder = args.placeholder;
        input.className = args.class;
        return input;
    },

    createButton(args) {
        const button = document.createElement('button');
        button.id = args.id;
        button.type = args.type;
        button.innerText = args.text;
        return button;
    }
}

export { getForm };