class Person {
    
    age = 0;
    steps = 0;

    constructor(nome) {
        this.name = nome; /* this - algum elemento especifico */
        
    }

    takeAstep() {
        this.steps++;
    }

    setAge(newAge) {
        if (typeof newAge == 'number') {
        this.age = newAge;
        } else {
            console.log('idade não aceita')
        }
    }
}

let p1 = new Person("João");
let p2 = new Person("Maria");
let p3 = new Person("Pedro");

/*p1.takeAstep() 
    console.log(`Passos de ${p1.name}: ${p1.steps}`);
*/
p1.setAge(20);
console.log(`${p1.name} tem ${p1.age} anos.`);