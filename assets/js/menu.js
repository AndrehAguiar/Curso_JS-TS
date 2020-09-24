document.addEventListener('DOMContentLoaded', function () {

    const createMenu = function () {
        const navs = {
            'home': '/Curso_JS-TS/',
            'imc': '/Curso_JS-TS/imcCalculator/',
            'timer': '/Curso_JS-TS/timer/',
            'tasks': '/Curso_JS-TS/lstTarefa/'
        };

        const menu = document.querySelector('#menu');

        Object.keys(navs).forEach(element => {

            let el = document.createElement('nav');
            el.id = `${element}`;
            el.innerText = `${element}`;

            menu.appendChild(el);

            const idEl = document.getElementById(`${element}`);

            idEl.addEventListener('click', function () {

                window.location.pathname == `${navs[element]}`
                    ? '#' : window.location.replace(`..${navs[element]}`);
            });

        });

    }
    createMenu();
    console.log(window.location.pathname);
});
