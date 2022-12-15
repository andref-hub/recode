let num1 = 14;
let num2 = 28;
console.log(num1 == num2); // False -> 14 não é igual à 28
console.log(num1*2 == num2); //True -> 14x2 = 28, que é igual a 28
console.log(num1 < num2); // True -> 14 é menor que 28
console.log(num1 <= num2); // True -> 14 é menor ou igual que 28
console.log(num1 > num2); // False -> 14 não é maior que 28
console.log(num1 >= num2); // False -> 14 não é maior ou igual que 28
console.log(num1 != num2); //True -> 14 não é igual à 28

let num3 = "4";
let num4 = 4;
let num5 = 8;
console.log(num3*2 === num5); //True -> o JS faz a conversão do texto em número para realizar a operação
console.log(num3 == num4); // True -> O conteúdo das variáveis são semelhantes (4)
console.log(num3 === num4); //False -> Apesar do conteúdo da variável ser semelhante (4), seu tipo não o é (um é texto o outro é número); portanto não temos uma igualdade estrita!

let n = true;
let b = false;
console.log(n == true && b == true); // False -> Uma das partes não é verdadeira, numa afirmação em que as duas devem ser (E)
console.log(n == true || b == true); // True -> Uma das partes é verdadeira, numa aformação em que ao menos uma delas deve ser (OU)