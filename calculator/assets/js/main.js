document.addEventListener('DOMContentLoaded', function () {
    const createCalculator = function () {

        const container = document.querySelector('.container');
        const title = document.createElement('h1');
        const input = document.createElement('input');
        const span = document.createElement('span');
        const div = function (itemClass, text) {
            let item = document.createElement('div');
            item.classList = itemClass;
            item.innerHTML = text;
            return item;
        }
        const grid = div('grdCalculator', '');

        const setDisplay = function () {
            input.id = 'display';
            input.type = 'text';
            input.readOnly = 'readonly';
            input.value = 0;
            return input;
        }

        const itensGrid = [
            { 'itemClass': 'display', 'text': '' },
            { 'itemClass': 'func clear', 'text': 'C' },
            { 'itemClass': 'func lpar', 'text': '(' },
            { 'itemClass': 'func rpar', 'text': ')' },
            { 'itemClass': 'func div', 'text': '/' },
            { 'itemClass': 'func num', 'text': 7 },
            { 'itemClass': 'func num', 'text': 9 },
            { 'itemClass': 'func num', 'text': 8 },
            { 'itemClass': 'func mult', 'text': '*' },
            { 'itemClass': 'func num', 'text': 4 },
            { 'itemClass': 'func num', 'text': 5 },
            { 'itemClass': 'func num', 'text': 6 },
            { 'itemClass': 'func plus', 'text': '+' },
            { 'itemClass': 'func num', 'text': 1 },
            { 'itemClass': 'func num', 'text': 2 },
            { 'itemClass': 'func num', 'text': 3 },
            { 'itemClass': 'func sub', 'text': '-' },
            { 'itemClass': 'func dot', 'text': '.' },
            { 'itemClass': 'func num', 'text': 0 },
            { 'itemClass': 'func del', 'text': '&laquo;' },
            { 'itemClass': 'func equal', 'text': '=' },
        ]

        title.innerText = 'Calculator';

        span.className = 'formula';

        container.appendChild(title);
        container.appendChild(grid);

        grid.appendChild(span);

        itensGrid.forEach(element => {

            let item = element.itemClass;
            item = div(element.itemClass, element.text);
            grid.appendChild(item);

        });

        const display = document.querySelector('.display');

        display.appendChild(setDisplay());

    }
    createCalculator()
});