// [ ] Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Ex: João e João, imprime true. João e Maria, imprime false.

const name1 = "João";
const name2 = "Maria";


let result = name1 === name1;    // === -->  compara o tipo ( string ou number ) e o valor.   
let result2 = name1 === name2;


console.log(result);
console.log(result2);

const type = "1"
const type2 = 1

let compare = type == type2
console.log(compare)                   //true

let compare2 = type === type2
console.log(compare2)                  //false

