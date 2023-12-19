let char = new Sorcerer();
let monsteer = new BigMonster();

let stagio = new stage(
    char,
    monsteer,
    document.querySelector('#char'),
    document.querySelector('#monster')
);

stagio.start();

