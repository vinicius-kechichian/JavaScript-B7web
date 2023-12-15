let char = new Sorcerer();
let monsteer = new BigMonster();

let stage = new Stage(
    char,
    monsteer,
    document.querySelector('#char'),
    document.querySelector('#monster')
);

stage.start();

