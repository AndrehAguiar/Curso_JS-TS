document.addEventListener('DOMContentLoaded', function () {

    const calcIMC = function () {

        const calculator = document.querySelector('#calculator');

        const createP = function () {
            const p = document.createElement('p');
            return p;
        }

        const setResult = function (msg, isValid) {
            const result = document.querySelector('#result');
            result.innerText = '';

            const p = createP();

            isValid ? p.classList.add('valid') : p.classList.add('invalid');

            p.innerHTML = msg;
            result.appendChild(p);
        }

        const getAltura = function () {
            const altura = document.querySelector('#altura').value;

            if (altura > 0) return altura;
            return setResult('Altura inválida', false);
        }

        const getPeso = function () {
            const peso = document.querySelector('#peso').value;

            if (peso > 0) return peso;
            return setResult('Peso inválido', false);
        }

        const getIMC = function (args) {
            const peso = args.peso;
            const altura = args.altura;
            const imc = peso / (altura ** 2);
            return imc.toFixed(2);
        }

        const getResult = function (imc) {
            if (imc >= 40) return 'Obesidade grau 3';
            if (imc >= 35) return 'Obesidade grau 2';
            if (imc >= 30) return 'Obesivade grau 1';
            if (imc >= 25) return 'Sobrepeso';
            if (imc >= 18.5) return 'Peso normal';
            if (imc < 18.5) return 'Abaixo do peso';
        }

        const calcular = function (event) {
            event.preventDefault();

            const args = {
                'peso': getPeso(),
                'altura': getAltura()
            };
            if (args.peso && args.altura) {
                const imc = getIMC(args);
                const msg = getResult(imc);
                setResult(`Seu IMC é ${imc}: (${msg})`, true)
            }
        }

        calculator.addEventListener('submit', calcular);
    }
    calcIMC();
});