let escolha = prompt ("Escolha um mês:");
escolha = escolha.toLocaleLowerCase();
 
switch (escolha) {
    case "02":
    alert ("Esse mês tem 28 dias!");
    break;
 
    case "04":
    case "06":
    case "09":
    case "11":
    alert ("Esse mês tem 30 dias!");
    break;
 
    case "01":
    case "03":
    case "05":
    case "07":
    case "08":
    case "10":
    case "12":
    alert ("Esse mês tam 31 dias!");
    break;
 
    default:
    alert("Mês desconhecido");
    break;
}