let lanche
let quantidade
let valor
let totalFinal = 0;
 
while ( lanche != 0 ){
    lanche = parseInt(prompt("Digite o código do lanche: 100-Cachorro \n 101-Bauru Simples \n 102-Bauru com Ovo \n 103-Hamburguers \n 104-Cheeseburguer \n 105-Refrigerante \n 0 Para Finalizar"));
    if (lanche == 0){
        break;
    }
 
    quantidade = parseInt(prompt("Digite a quantidade de lanches"));
 
    switch (lanche) {
    case 100:
    valor = quantidade * 1.70
        alert (`Você comprou ${quantidade} cachorro(s) quente(s) e o valor a pagar será de: ${valor.toFixed(2)}`);
        break;
    case 101:
    valor = quantidade * 2.30
        alert (`Você comprou ${quantidade} Bauru(s) simples e o valor a pagar será de: ${valor.toFixed(2)}`);
        break;
    case 102:
    valor = quantidade * 2.60
        alert (`Você comprou ${quantidade} Bauru(s) com ovo e o valor a pagar será de: ${valor.toFixed(2)}`);
        break;
    case 103:
    valor = quantidade * 2.40
        alert (`Você comprou ${quantidade} hamburguer(es) o valor a pagar será de: ${valor.toFixed(2)}`);
        break;
    case 104:
    valor = quantidade * 2.50
        alert (`Você comprou ${quantidade} cheeseburguer(s) e o valor a pagar será de: ${valor.toFixed(2)}`);
        break;
    case 105:
    valor = quantidade * 1.00
        alert (`Você comprou ${quantidade} refrigerante(s) e o valor a pagar será de: ${valor.toFixed(2)}`);
        break;
    default:
        alert ("Código invalido");
}
totalFinal += valor;
}
alert (`O valor total dos produtos é ${totalFinal}`)