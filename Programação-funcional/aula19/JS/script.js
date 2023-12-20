let pessoa =  {
        name:'Vinicius',
        lastName:'Kechichian',
        age: 25,
        getFullName() {
            return `${this.name} ${this.lastName}`;
    }
}

console.log(pessoa.getFullName());