class Pessoa {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    getName() {
        return this.name;
    }
    getID() {
        return this.id;
    }
    setName(name) {
        this.name = name;
    }
    setId(id) {
        this.id = id;
    }
}
export { Pessoa };