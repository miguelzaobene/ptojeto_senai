let Produto = prompt ("Digite o código do produto: 1-Alimento não-perecível / 2-Alimento Perecivel / 3-Vestuário / 4-Higiene Pessoal / 5-Limpeza e Utensílio Doméstico");
 
switch (Produto) {
    case "1" :
        console.log("Alimento não-perecível");
        break;
    case "2" :
        console.log("Alimento Perecivel");
        break;
    case "3" :
        console.log("Vestuário");    
        break;
    case "4" :
        console.log("Higiene Pessoal");
        break;
    case "5" :
        console.log("Limpeza e Utensílio Doméstico");
        break;
        default:
        console.log("Qualquer outro código invalido");
}