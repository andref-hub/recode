// NOTAÇÃO > {'chave' : 'valor'}
let x = {
    nome: "João",
    idade: 30,
    altura: 1.68,
    calculo: (num) => num*2,
    lista: ["pescar", "jogar", "cinema", "livros"]
};

console.log(x) // Todo o objeto
console.log(x.idade) // Apenas um valor específico de uma chave
console.log(x.calculo(2)); // executa a função
console.log(x.lista); // array todo
console.log(x.lista[3]); // item 03 do array
