class Person {
    
    _age = 0;
    steps = 0;

    constructor(firstName, lastName) {
        this.firstName = firstName; /* this - algum elemento especifico */
        this.lastName = lastName;
    }

    takeAstep() {
        this.steps++;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    get age() {
        return this._age;
    }

    set age(x) {
        this.age = x;
    }
 }

let p1 = new Person("João", "Silva");
let p2 = new Person("Maria", "Leite");
let p3 = new Person("Pedro", "Duarte");

/*p1.takeAstep() 
    console.log(`Passos de ${p1.name}: ${p1.steps}`);
*/

p1.age = 20;
console.log(`${p1.fullName} tem ${p1.age} anos.`);