// Knight ou Sorcerer - Guerreiro ou Mago 
// LittleMonster ou BigMonster 

class Character {

    _life = 1;
    maxLife = 1;
    attack = 0;
    defense = 0;


    constructor(name) {
        this.name = name
    }

get life() {
    return this._life;
}

set life(newLife) {
    this._life = newLife < 0 ? 0: newLife;
  }
}

//  mago    //
class Knight extends Character {
    constructor() {
        super();
        this.life = 100;
        this.attack = 10;
        this.defense = 8;
        this.maxLife = this.life;
    }
}

class Sorcerer extends Character {
    constructor() {
        super();
        this.life = 80;
        this.attack = 14;
        this.defense = 3;
        this.maxLife = this.life;
    }
}

class LittleMonster extends Character {
    constructor() {
        super('Little Monster');
        this.life = 40;
        this.attack = 4;
        this.defense = 4;
        this.maxLife = this.life;
    }
}

class BigMonster extends Character {
    constructor() {
        super('Big Monster');
        this.life = 90;
        this.attack = 54;
        this.defense = 13;
        this.maxLife = this.life;
    }
}