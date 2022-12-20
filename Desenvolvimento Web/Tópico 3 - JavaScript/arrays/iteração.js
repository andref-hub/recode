let nomes = ['Carla', 'Paulo', 'Silvio', 'Fabiano', 'Julia', 'Clarice'];

console.log(nomes);

for(let i=0; i<nomes.length; i++) {
    console.log(nomes[i]);
}

console.log('---------- // ------------');

let contador = 0;
while (contador < nomes.length) {
    console.log(nomes[contador++]);
}

console.log('---------- // ------------');

// MAP -> Função de callback
nomes.map(function(n) {
    console.log(n);
});