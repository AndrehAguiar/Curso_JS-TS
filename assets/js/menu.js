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

            idEl.addEventListener('click', function (e) {
                let path = window.location.pathname;
                if (element === 'home'){                    
                    path === (`/${navs[element]}`)
                        ? './' : window.location.replace(`../`);
                }
                else{
                    path.includes(`${navs[element]}`)
                        ? './' : window.location.replace(`${navs[element]}`,`e.path[0]`);
                }
                console.log(e);
                console.log(e.path[0].split('#')[0];

            });

        });

    }
    createMenu();
    console.log(window.location.pathname);
});
