class samurai {
    constructor(name, clan){
        this.name = name;
        this.clan = clan;
    }

    batalhar(adversario){
        if(adversario.skill > this.skill){
            console.log("Você desonrou os "+this.clan);
        }
        else console.log("Mais um dia para honrar o seu feudo");
    }
}

let samurai02 = new samurai("Ofune", "Hikigawa");

let samurai01 = new samurai("Mifune", "Hizen");

samurai02.skill = 4;
samurai01.skill = 3;

samurai01.batalhar(samurai02);

console.log(samurai01);