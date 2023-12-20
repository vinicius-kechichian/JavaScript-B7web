function createPerson(name, lastName, age) {
    return{
        name,
        lastName,
        age
    }
}

let person1 = createPerson('Vinicius','Kechichian', 25);
let person2 = createPerson('Karol','Oliveira',27);

console.log(person2);