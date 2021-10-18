const myName = 'Nicolas';
const myAge = 12;
const suma = (a, b) => {
    return a + b;
};
suma(12, 23);
class Persona {
    constructor(age, name) {
        this.age = age;
        this.name = name;
    }
    getSummary() {
        return `my name is ${this.name}, ${this.age}`;
    }
}
const nicolas = new Persona(15, 'nicolas');
nicolas.getSummary();
//# sourceMappingURL=recap.js.map