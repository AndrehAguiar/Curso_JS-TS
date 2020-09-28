class ValidCPF {
    constructor(cpf) {

        Object.defineProperty(this, 'cpfClean', {
            get: function () {
                return cpf.replace(/\D+/g, '');
            }
        });

        ValidCPF.prototype.arrayConverter = function (cpf) {
            return Array.from(cpf).slice(0, 9);
        }

        ValidCPF.prototype.validate = function () {

            const cpfArr = this.arrayConverter(this.cpfClean);
            let digit = this.check(cpfArr);

            if (digit !== Number(this.cpfClean.charAt(cpfArr.length))) return false;

            cpfArr.push(digit);
            digit = this.check(cpfArr);

            if (digit !== Number(this.cpfClean.charAt(cpfArr.length))) return false;
            return this.isSequency() ? false : true;
        }

        ValidCPF.prototype.check = function (cpfArr) {

            let decrement = cpfArr.length + 1;

            const checkDigit = cpfArr.reduce((accumulator, value) => {
                accumulator += (Number(value) * decrement);
                decrement--;
                return accumulator;
            }, 0);
            let digit = (11 - (checkDigit % 11));
            return digit > 9 ? 0 : digit;
        }

        ValidCPF.prototype.generate = function () {
            const len = 9;
            let cpf = '';
            for (let i = 0; i < 9; i++) {
                cpf += `${Math.floor(Math.random() * 10)}`;
            }
            const cpfArr = this.arrayConverter(cpf);
            cpfArr.push(this.check(cpfArr));
            cpfArr.push(this.check(cpfArr));
            cpf = cpfArr.join('');
            return cpf;
        }

        ValidCPF.prototype.isSequency = function () {
            return this.cpfClean === this.cpfClean[0].repeat(this.cpfClean.length);
        }

    }

}

export { ValidCPF };