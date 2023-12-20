// Knight ou Sorcerer - Guerreiro ou Mago 
// LittleMonster ou BigMonster 


class Character {

    _life = 1;
    maxLife = 1;
    attack = 0;
    defense = 0;


    constructor(name) {
        this.name = name;
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
        super('Sorcerer');
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

class stage {
    constructor(fighter1, fighter2, fighter1El, fighter2El) {
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1El = fighter1El;
        this.fighter2El = fighter2El;
    }

    start() {
        this.update();
        //TODO: Evento do botão de atacar
       // this.fighter1El.querySelector('.attackbutton').addEventListener('click', () => this.doAttack(this.fighter1, this.fighter2 ));
      //  this.fighter2El.querySelector('.attackbutton').addEventListener('click', () => this.doAttack(this.fighter2, this.fighter1 ));
    
        this.fighter1El.querySelector(".attackButton").addEventListener("click", () => this.doAttack(this.fighter1, this.fighter2) );
        this.fighter2El.querySelector(".attackButton").addEventListener("click", () => this.doAttack(this.fighter2, this.fighter1) );
    }

    update() {
        // fighter 1 
        this.fighter1El.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life} HP`;
        let f1pct = (this.fighter1.life / this.fighter1.maxLife) * 100;
        this.fighter1El.querySelector('.lifebar .bar').style.width = `${f1pct}%`;

        // fighter 2 
        this.fighter2El.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life} HP`;
        let f2pct = (this.fighter2.life / this.fighter2.maxLife) * 100;
        this.fighter2El.querySelector('.lifebar .bar').style.width = `${f2pct}%`;
    }

    doAttack(attacking, attacked) {
        console.log(`${attacking.name} está atacando ${attacked.name}`);
        if(attacking.life <= 0 || attacked.life <= 0 ) {
            console.log(`atacando cachorro morto.`);
            return;
        }

        let attackFactor = (Math.random() * 2).toFixed(2);
        console.log(attackFactor);

        this.update();
    }
}