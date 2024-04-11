let numero1 = parseInt(prompt("Digite o primeiro número:"));
let ssmd = prompt("Digite o + ; - ; x ; %");
let numero2 = parseInt(prompt("Digite o segundo número:"));
let resultado
 
switch (ssmd) {
    case "+":
        resultado = numero1 + numero2
        alert(`A soma do ${numero1} e ${numero2} é igual a ${resultado}`);
        break;
    case "-":
        resultado = numero1 - numero2
        alert(`A soma do ${numero1} e ${numero2} é igual a ${resultado}`);
        break;
    case "x":
        resultado = numero1 * numero2
        alert(`A soma do ${numero1} e ${numero2} é igual a ${resultado}`);
        break;
    case "%":
        resultado = numero1 / numero2
        alert(`A soma do ${numero1} e ${numero2} é igual a ${resultado}`);
        break;
    case "u":
        alert("Essa letra é uma vogal");
        alert(`A soma do ${numero1} e ${numero2} é igual a ${resultado}`);
        break;
        break;
    default:
        alert("Desconhecidos");
}