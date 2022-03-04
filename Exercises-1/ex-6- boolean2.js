// [ ] Faça um programa que imprima na tela se um nome é diferente ao outro nome digitado. Ex: João e João, imprime false. João e Maria, imprime true.

const name1 = "João";
const name2 = "Maria";

let compare = name1 != name1;
let compare2 = name1 != name2;

console.log(compare);
console.log(compare2);

const number1 = "5"
const number2 = 5

let compare3 = number1 != number2
let compare4 = number1 !== number2

console.log(compare3)               //false
console.log(compare4)               //true