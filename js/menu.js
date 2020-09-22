const home = document.getElementById('home');
home.addEventListener('click', function () {

    window.location.pathname == '/'
        ? './' : window.location.replace('../')
});

const imc = document.getElementById('imc');
imc.addEventListener('click', function () {

    window.location.pathname == '/imcCalculator/'
        ? './' : window.location.replace('../imcCalculator/')
});

const timer = document.getElementById('timer');
timer.addEventListener('click', function () {

    window.location.pathname == '/timer/'
        ? './' : window.location.replace('../timer/')
});