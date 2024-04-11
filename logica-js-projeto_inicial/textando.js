let quantidadeImpares
let quantidadePares


for (let i = 1; i <= quantidadeNumeros; i++) {
    let numero = parseInt(prompt(`Informe o ${i}º número inteiro:`));
 
    if (numero % 2 === 0) {
        quantidadePares++;
    } else {
        quantidadeImpares++;
    }
}



