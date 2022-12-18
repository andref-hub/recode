/*
   1, 2, 3 -> primeiro trimestre
   4, 5, 6 -> segundo trimestre
   7, 8, 9 -> terceiro trimestre
   10, 11, 12 -> quarto trimestre
*/

let mes = 10;

switch (mes) {
    case 1:
    case 2:
    case 3:
    console.log("PRIMEIRO TRIMESTRE");
    break;

    case 4:
    case 5:
    case 6:
    console.log("SEGUNDO TRIMESTRE");
    break;

    case 7:
    case 8:
    case 9:
    console.log("TERCEIRO TRIMESTRE");
    break;

    case 10:
    case 11:
    case 12:
    console.log("QUARTO TRIMESTRE");
    break;

    default:
        console.log("RESPOSTA INVÁLIDA!");
}