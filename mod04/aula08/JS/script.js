class Person {
    static hands = 2; //static, variavel estatica, não faz parte do objeto
    age = 0;

    constructor(name) {
        this.name = name;
    }

}

let p1 = new Person("Vinicius");
//'p1.sayHi();
//console.log(`${p1.name} tem ${Person.hands} mãos`);