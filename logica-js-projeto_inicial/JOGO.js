alert("Bem vindo ao jogo do número secreto");
let aleatorio = 1000;
let numeroSecreto = parseInt(Math.random()*aleatorio+1);
let tentativa =1;
let chute;
while (chute != numeroSecreto) {
    chute = prompt (`Digite o numero de 1 a ${aleatorio}`);
    if(chute == numeroSecreto){
        break;
    }
    else {
        let maiorMenor = chute < numeroSecreto ? "maior" : "menor"
        alert (`o número secreto é ${maiorMenor} que ${chute}`);
    }  
    // tentativa = tentatitva +1
    tentativa ++;
}
 
 
let palavraTentativa = tentativa > 1 ? "tentativas" : "tentativa";
alert (`Parabéns, você acertou o número secreto, ${numeroSecreto}! com ${tentativa} ${palavraTentativa}!`);

