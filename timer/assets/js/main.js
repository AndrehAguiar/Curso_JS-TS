document.addEventListener('DOMContentLoaded', function () {

    const timer = function () {

        const container = document.querySelector('.container');
        const title = document.createElement('h1');
        const cronometer = document.createElement('span');
        const buttonReset = document.createElement('button');
        const buttonInit = document.createElement('button');
        const buttonPause = document.createElement('button');

        title.innerText = 'Timer';
        container.appendChild(title);

        let ms = 0;
        let cronoCounter;

        const setTime = function (segundos) {
            const time = new Date(segundos * 1000);
            return time.toLocaleTimeString('pt-BR', {
                hour12: false,
                timeZone: 'GMT'
            });

        }

        const create = function () {

            cronometer.id = 'crono';
            cronometer.innerText = setTime(ms);

            buttonInit.innerText = 'Start';
            buttonInit.className = 'init';
            buttonInit.type = 'button';
            buttonInit.id = 'init';

            buttonPause.innerText = 'Pause';
            buttonPause.className = 'pause';
            buttonPause.type = 'button';
            buttonPause.id = 'pause';

            buttonReset.innerText = 'Reset';
            buttonReset.className = 'reset';
            buttonReset.type = 'button';
            buttonReset.id = 'reset';

            container.appendChild(cronometer);
            container.appendChild(buttonInit);
            container.appendChild(buttonPause);
            container.appendChild(buttonReset);

            const crono = document.querySelector('#crono');

        }

        const timerInit = function () {
            cronoCounter = setInterval(function () {
                ms++
                crono.innerText = setTime(ms);
            }, 1000);
            crono.style.color = 'black';
        }

        const timerPause = function () {
            clearInterval(cronoCounter);
            crono.style.color = 'red';
        }

        const timerReset = function () {
            clearInterval(cronoCounter);
            ms = 0;
            crono.innerText = setTime(ms);
            crono.style.color = 'black';
        }

        const addEvent = function () {

            document.addEventListener('click', function (e) {
                const el = e.target;
                if (el.classList.contains('init')) timerInit();
                if (el.classList.contains('pause')) timerPause();
                if (el.classList.contains('reset')) timerReset();
            });
        }

        create();
        addEvent();
    }

    timer();
});