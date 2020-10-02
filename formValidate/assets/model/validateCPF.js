class ValidCPF {
    constructor(postedCPF) {
        Object.defineProperty(this, 'cleanCPF', {
            writable: false,
            enumerable: false,
            configurable: false,
            value: postedCPF.replace(/\D+/g, '')
        });
    }

    isSequence() {
        return this.cleanCPF.charAt(0).repeat(this.cleanCPF.length) === this.cleanCPF;
    }

    cpfGenerate() {
        const cpfPart = this.cleanCPF.slice(0, -2);
        const digitOne = ValidCPF.generateDigit(cpfPart);
        const digitTwo = ValidCPF.generateDigit(cpfPart + digitOne);
        this.newCPF = `${cpfPart}${digitOne}${digitTwo}`;
    }

    validate() {
        if (!this.cleanCPF) return false;
        if (typeof this.cleanCPF !== 'string') return false;
        if (this.cleanCPF.length !== 11) return false;
        if (this.isSequence()) return false;

        this.cpfGenerate();

        return this.newCPF === this.cleanCPF;
    }

    static generateDigit(cpfPart) {
        let total = 0;
        let decrement = cpfPart.length + 1;

        for (let strNumeric of cpfPart) {
            total += decrement * Number(strNumeric);
            decrement--;
        }
        const digit = 11 - (total % 11);
        return digit <= 9 ? String(digit) : '0';
    }
}
export { ValidCPF };