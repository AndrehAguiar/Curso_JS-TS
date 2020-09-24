document.addEventListener('DOMContentLoaded', function () {

    const createMenu = function () {
        const navs = {
            'home': 'Curso_JS-TS/',
            'imc': 'imcCalculator/',
            'timer': 'timer/',
            'tasks': 'lstTarefa/'
        };

        const menu = document.querySelector('#menu');

        Object.keys(navs).forEach(element => {

            let el = document.createElement('nav');
            el.id = `${element}`;
            el.innerText = `${element}`;

            menu.appendChild(el);

            const idEl = document.getElementById(`${element}`);

            idEl.addEventListener('click', function () {

                window.location.pathname == `/Curso_JS-TS/${navs[element]}`
                    ? '#' : window.location.replace(`../${navs[element]}`);
            });

        });

    }
    createMenu();
    console.log(window.location.pathname);
});
