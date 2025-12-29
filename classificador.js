//let NomeHeroi = 'Joaozin da doze';
//let xp = 1000;

let heroi = {
    NomeHeroi : "Joazin da doze",
    xp : 12000
};

console.log(heroi.NomeHeroi);

if(heroi.xp <= 1000){
    console.log(" O Herói de nome " + heroi.NomeHeroi + " está no nível de Ferro ");

}  else if(heroi.xp > 1000 && heroi.xp <= 2000){
    console.log(" O Herói de nome " + heroi.NomeHeroi + " está no nível de Bronze");

} else if(heroi.xp > 2000 && heroi.xp <= 5000){
    console.log(" O Herói de nome " + heroi.NomeHeroi + " está no nível de Prata");

} else if(heroi.xp > 5000 && heroi.xp <= 7000){
    console.log(" O Herói de nome " + heroi.NomeHeroi + " está no nível de Ouro");

} else if(heroi.xp > 7000 && heroi.xp <= 8000){
    console.log(" O Herói de nome " + heroi.NomeHeroi + " está no nível de Platina");

} else if(heroi.xp > 8000 && heroi.xp <= 9000){
    console.log(" O Herói de nome " + heroi.NomeHeroi + " está no nível de Ascendente");

} else if(heroi.xp > 9000 && heroi.xp <= 10000){
    console.log(" O Herói de nome " + heroi.NomeHeroi + " está no nível de Imortal");

} else if(heroi.xp > 10000){
    console.log(" O Herói de nome " + heroi.NomeHeroi + " está no nível de Radiante");
}

