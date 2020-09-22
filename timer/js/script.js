document.addEventListener('DOMContentLoaded', function () {

    const container = document.querySelector('.container');
    const cronometer = document.createElement('span');
    const buttonReset = document.createElement('button');
    const buttonInit = document.createElement('button');
    const buttonPause = document.createElement('button');
    let ms = 0;
    let cronoCounter;

    const timer = function () {

        const setTime = function (segundos) {
            const time = new Date(segundos * 1000);
            return time.toLocaleTimeString('pt-BR', {
                hour12: false,
                timeZone: 'GMT'
            });

        }

        const timerInit = function () {
            const crono = document.querySelector('#crono');
            cronoCounter = setInterval(function () {
                ms++
                crono.innerText = setTime(ms);
            }, 1000);
        }

        const timerPause = function () {
            clearInterval(cronoCounter);
        }

        const timerReset = function () {
            const crono = document.querySelector('#crono');
            clearInterval(cronoCounter);
            ms = 0;
            crono.innerText = setTime(ms);
        }

        const create = function () {

            cronometer.id = 'crono';
            cronometer.innerText = setTime(ms);

            buttonInit.innerText = 'Iniciar';
            buttonInit.type = 'button';
            buttonInit.id = 'init';

            buttonPause.innerText = 'Pausar';
            buttonPause.type = 'button';
            buttonPause.id = 'pause';

            buttonReset.innerText = 'Reset';
            buttonReset.type = 'button';
            buttonReset.id = 'reset';

            container.appendChild(cronometer);
            container.appendChild(buttonInit);
            container.appendChild(buttonPause);
            container.appendChild(buttonReset);

        }

        const addEvent = function () {

            const init = document.querySelector('#init');
            const pause = document.querySelector('#pause');
            const reset = document.querySelector('#reset');

            init.addEventListener('click', timerInit);

            pause.addEventListener('click', timerPause);

            reset.addEventListener('click', timerReset);



        }
        create();
        addEvent();
    }

    timer();
});