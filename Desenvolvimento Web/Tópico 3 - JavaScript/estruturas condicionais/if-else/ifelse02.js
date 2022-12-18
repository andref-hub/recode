/*
   1, 2, 3 -> primeiro trimestre
   4, 5, 6 -> segundo trimestre
   7, 8, 9 -> terceiro trimestre
   10, 11, 12 -> quarto trimestre
*/

let mes = 5;

if (mes >= 1 && mes <= 3) {
    console.log("PRIMEIRO TRIMESTRE");
} else if (mes >= 4 && mes <= 6) {
    console.log("SEGUNDO TRIMESTRE");
} else if (mes >= 7 && mes <= 9) {
    console.log("TERCEIRO TRIMESTRE");
} else if (mes >= 10 && mes <= 12) {
    console.log("QUARTO TRIMESTRE");
} else {
    console.log("RESPOSTA INVÁLIDA");
}