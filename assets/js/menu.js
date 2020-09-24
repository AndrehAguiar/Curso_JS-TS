document.addEventListener('DOMContentLoaded', function () {
    
    const urlPath = https://andrehaguiar.github.io/Curso_JS-TS;

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

            idEl.addEventListener('click', function (e) {
                let path = window.location.pathname;
                
                path === (`${urlPath}${navs[element]}`)
                    ? './' : window.location.replace(`${urlPath}${navs[element]}`);

            });

        });

    }
    createMenu();
    console.log(window.location.pathname);
});
