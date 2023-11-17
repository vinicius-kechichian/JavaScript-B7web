class Person {
    age = 0;

    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log(`${this.name} Olá`);
    } 
}

class Student extends Person {

    constructor(name, id) {
        super(name);  // super - person
        this.id = id; //this class student 
    }

    sayHello() {
        super.sayHi(); // utilizando função de Person
    }
}

let p1 = new Student("Bonieky", 1);
p1.age = 25;
p1.sayHi();

p1.sayHello();

let p2 = new Student("Vinicius", 25);
p2.age = 29;
console.log(`${p1.name} tem ${p1.age} anos e matricula ${p1.id}`)
console.log(`Estudante ${p2.name}, numero de matricula ${p2.id} e idade ${p2.age}`)