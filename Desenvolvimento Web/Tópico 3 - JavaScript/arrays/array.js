// >>> CRIAÇÃO DE ARRAY <<<
// Padrão
let coisas = ["carros", "avião", "bicicleta"];
console.log(coisas);
console.log(typeof(coisas));

//Usando a classe Array();
let veiculos = Array('corsa', 'etios', 'jeep', 'hilux');
console.log(veiculos);
console.log(typeof(veiculos));

//Usando uma lista vazia
let lista = [];

console.log('---------- // ------------');

// >>> ACESSO AO ARRAY <<<
let nomes = ['Ana', 'Beatriz', 'Marcelo', 'Juan'];
console.log(nomes[1]); // arrays começam com 0

console.log('---------- // ------------');

// >>> CRIAÇÃO DE ITENS <<<
let itens = ['tesoura', 'corda', 'papel']
itens[3] = 'mochila';
console.log(itens);
itens[8] = 'caneta';
console.log(itens);

console.log('---------- // ------------');

// >>> MÉTODO PUSH(); <<<
let numeros = [];
numeros.push('1', '9', '4', '7');
console.log(numeros);

console.log('---------- // ------------');

// >>> MÉTODO POP(); <<<   
let num = ['3', '5', '8', '10'];
console.log(num);
let removido = num.pop();
console.log(removido);
console.log(num);

console.log('---------- // ------------');

// >>> MÉTODO SPLICE(): <<<
let nam = ['Carla', 'Paulo', 'Silvio', 'Fabiano', 'Julia', 'Clarice'];
console.log(nam);
nam.splice(2,2);
console.log(nam);

console.log('---------- // ------------');

// >>> MÉTODO SHIFT(); <<<
let letras = ['a', 'c', 'z', 'x', 'd', 'b'];
console.log(letras);
let fora = letras.shift();
console.log(fora);
console.log(letras);

console.log('---------- // ------------');

// >>> ORDENAÇÃO DE ARRAY <<<
let n = ['Thiago', 'Carolina', 'Mirian', 'Saulo'];
console.log(n);
n.sort();
console.log(n);
// OBS.: Maiúsculas tem prioridade sobre minúsculas

console.log('---------- // ------------');

// >>> TAMANHO DO ARRAY <<<
let vetor = ['1', '2', '3', '4', '5'];
console.log(vetor);
console.log(vetor.length);
vetor[vetor.length] = '6';
console.log(vetor);

