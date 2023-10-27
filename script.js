let nome = 'Gladiador';
let quantidadeXp =  7400;

if(quantidadeXp < 1000){
    console.log('Ferro');
} else if(quantidadeXp >= 1001 && quantidadeXp <= 2000){
    console.log('Bronze');
} else if(quantidadeXp >= 2001 && quantidadeXp <= 5000){
    console.log('Prata');
} else if(quantidadeXp >= 6001 && quantidadeXp <= 7000){
    console.log('Ouro');
} else if(quantidadeXp >= 7001 && quantidadeXp <= 8000){
    console.log('Platina');
} else if(quantidadeXp >= 8001 && quantidadeXp <= 9000){
    console.log('Ascendente');
} else if(quantidadeXp >= 9001 && quantidadeXp <= 10000){
    console.log('Imortal');
} else if(quantidadeXp >= 10001){
    console.log('Radiante');
}

console.log('o Heroi ' + nome + ' está no nivel ' + quantidadeXp);
