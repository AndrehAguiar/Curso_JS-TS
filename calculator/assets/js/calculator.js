document.addEventListener('DOMContentLoaded', function () {
    function createCalculator() {
        return {
            resultState: false,
            display: document.querySelector('#display'),
            formula: document.querySelector('.formula'),

            start() {
                this.clickButton();
                this.pressKey();
            },

            btnDisplay(btnValue) {
                this.display.value = this.display.value === '0' || this.resultState
                    ? this.display.value = btnValue
                    : this.display.value += btnValue;
                this.resultState = false;
            },

            formatDecimal(btnValue) {
                this.display.value = this.display.value.slice(-1) === '.'
                    ? this.display.value
                    : this.display.value += btnValue;
            },

            formatFormula(btnValue) {
                this.formula.innerText.includes('=')
                    ? this.formula.innerText = btnValue
                    : this.formula.innerText += btnValue;
            },

            setFormula(btnValue) {

                if (this.formula.innerText.includes('=')) {
                    this.resultState = false;
                    this.formula.innerText = `${this.display.value}${btnValue}`;
                }
                else {
                    if (this.formula.innerText.slice(-1) === ')') {
                        this.formula.innerText += `${btnValue}`;
                    }
                    else {
                        this.formula.innerText += `${this.display.value}${btnValue}`;
                    }
                }
                this.result();
            },

            result() {

                try {
                    let mathAccount = eval(this.formula.innerText.slice(0, -1));
                    this.formula.innerText.slice(-1) === '='
                        ? this.formula.innerText += mathAccount
                        : this.formula.innerText;
                    this.setResult(mathAccount);

                } catch (e) {
                    console.log(e);
                    this.resultState = true;
                    return;
                }
            },

            setResult(mathAccount) {
                this.display.value = mathAccount;
                this.resultState = true;
            },

            delValue() {
                let val = this.display.value.length;
                this.display.value = val === 1 ? '0' : this.display.value.slice(0, -1);
                this.formula.innerText = this.formula.innerText.slice(0, -2);
            },

            clearDisplay() {
                this.display.value = 0;
                this.formula.innerText = '';
            },

            clickButton() {

                document.addEventListener('click', function (e) {
                    const el = e.target;
                    const btnValue = el.innerText;

                    if (el.classList[0] != 'func') return;

                    switch (el.classList[1]) {
                        case 'num':
                            this.btnDisplay(btnValue);
                            break;
                        case 'dot':
                            this.formatDecimal(btnValue);
                            break;
                        case 'equal':
                            this.setFormula(btnValue);
                            break;
                        case 'del':
                            this.delValue();
                            break;
                        case 'clear':
                            this.clearDisplay();
                            break;
                        case 'lpar' || 'rpar':
                            this.formatFormula(btnValue);
                            break;
                        default:
                            this.setFormula(btnValue);
                    }
                }.bind(this));
            },

            pressKey() {

                document.addEventListener('keypress', function (e) {
                    console.log(e.key);
                })
            },

        };
    }
    const objCalculator = createCalculator();
    objCalculator.start();
});