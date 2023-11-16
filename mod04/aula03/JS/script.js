class Person {
    
    age = 0;

    constructor(nome) {
        this.name = nome; /* this - algum elemento especifico */
        
    }
}

let p1 = new Person("João");
let p2 = new Person("Maria");
let p3 = new Person("Pedro");

p1.age = 25;

console.log(`${p1.name} tem ${p1.age} anos`);
console.log(`${p2.name} tem ${p2.age} anos`);
console.log(`${p3.name} tem ${p3.age} anos`);