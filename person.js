class Person{

    constructor(name) {
        this.name = name;
    }

    sayMyName(){
        return `Seu nome é ${this.name}`
    }
}

module.exports = {
    Person,
}

m