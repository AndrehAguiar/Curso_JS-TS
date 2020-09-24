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
                if (element === 'home'){                    
                    window.location.pathname === (`/${navs[element]}`)
                        ? './' : window.location.replace(`../`);
                }
                else{
                    window.location.pathname.includes(`${navs[element]}`)
                        ? './' : window.location.replace(`${navs[element]}`,`e.pathid`);
                }
                console.log(e.pathid);

            });

        });

    }
    createMenu();
    console.log(window.location.pathname);
});
