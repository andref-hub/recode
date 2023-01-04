// SUBSTRING > Pega a parte do texto; tem-se uma posição inicial e a quantidade de elementos a serem selecionados
let nome = "Hello World!"
console.log (nome.substring(1, 4)); // inicia na posição 01 e mostrará 04 elementos (a partir da posição 00)

//SPLIT > Fatia a  string. É necessário colocar o parâmetro de base para a fatia
let fatia = "Era uma vez, num lugar muito distante...";
console.log(fatia.split(' ')); //Fatia o texto pelos espaços
let lista = fatia.split(' ');
lista.map(function(p) {
    console.log(p);
})

//TOUPPERCASE/TOLOWERCASE > Converte tudo pra maiúsculo/minúsculo
let tamanho = 'KaWaBaNgA';
console.log(tamanho.toUpperCase());
console.log(tamanho.toLowerCase());