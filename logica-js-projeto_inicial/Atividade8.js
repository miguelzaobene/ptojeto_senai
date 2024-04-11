let numeroLados = parseInt(prompt("Digite o número de lados do polígono:"));
let medidaLado = parseFloat(prompt("Digite a medida do lado do polígono em cm:"));
if (numeroLados === 3) {
    var areaTriangulo = (Math.sqrt(3) * Math.pow(medidaLado, 2)) / 4;
    alert("TRIÂNGULO\nÁrea: " + areaTriangulo.toFixed(2) + " cm²");
} else if (numeroLados === 4) {
    var areaQuadrado = Math.pow(medidaLado, 2);
    alert("QUADRADO\nÁrea: " + areaQuadrado.toFixed(2) + " cm²");
} else if (numeroLados === 5) {
    alert("PENTÁGONO");
} else if (numeroLados < 3) {
    alert("NÃO É UM POLÍGONO");
} else {
    alert("POLÍGONO NÃO IDENTIFICADO");
}