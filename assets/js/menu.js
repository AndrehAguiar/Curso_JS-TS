document.addEventListener('DOMContentLoaded', function () {

    const urlPath = 'https://andrehaguiar.github.io/Curso_JS-TS';
    //const urlPath = 'http://127.0.0.1:5500';

    const createMenu = function () {
        const navs = {
            'home': '/',
            'imc': '/imcCalculator/',
            'timer': '/timer/',
            'tasks': '/lstTarefa/'
        };

        const menu = document.querySelector('#menu');

        Object.keys(navs).forEach(element => {

            let el = document.createElement('nav');
            el.id = `${element}`;
            el.innerText = `${element}`;

            menu.appendChild(el);

            const idEl = document.getElementById(`${element}`);

            idEl.addEventListener('click', function () {

                let path = window.location;

                path === (`${urlPath}${navs[element]}`)
                    ? '' : path.replace(`${urlPath}${navs[element]}`);

            });
        });
    }
    createMenu();
});