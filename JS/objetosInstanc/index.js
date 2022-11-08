/* instanciar um objeto dentro de outro*/

/* classe de onde o objeto será instanciado através de um constructor*/

class Samurai{
    constructor(nome, cla, poder){
        this.nome = nome,
        this.cla = cla,
        this.poder = poder
    }
    lutar(poderad){
        if(this.poder > poderad){
            console.log("Seu clã é fraco");
        }
        else console.log("Nosso dojo dará volta por cima");
    }
}

class dojo {
    constructor(nome, regiao, especialidade, samuraiName, samuraiClan, samuraiPower){
        this.nome = nome,
        this.regiao = regiao,
        this.especialidade = especialidade
        this.samurai = new Samurai(samuraiName, samuraiClan, samuraiPower);
    }
}

let dojokan = new dojo("Kibukyia", "Saitama", "Meifumado", "Shinzo", "Hisoka", 1400);
console.log(dojokan);

/*---------------------*/

class distrito {
    constructor(nome, regiao, nomeNinja, claNinja){
        this.nome = nome,
        this.regiao = regiao,
        this.ninja = new ninja(nomeNinja, claNinja)
    }
}

class ninja {
    constructor(nome, cla){
        this.nome = nome,
        this.cla = cla
    }
}

let distritof = new distrito("Kibukyia", "Norte", "Nosferatus", "Kioshyikun");
