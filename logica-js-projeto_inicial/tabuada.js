let numero = parseInt(prompt ("Digite um número de 1 a 10!"));
if (numero<=10){
    for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
    }
}
else {
    alert ("Número invalido!");
}