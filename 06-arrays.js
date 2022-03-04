/* Arrays - Vetor - Lista  - conjunto de informações de uma mesma variável */
/* marca posição */
/* posso ter na array qualquer tipo de dado */

const numbers = [12,24,34,56, "uma frase", {}, 345];

console.log(numbers[2]);   // mostra a terceira posição da variável numbers, pois a primeira posição é zero.
console.log(numbers[0]);

const people = [{
    name: 'Diego Peixoto',
    age: 42,
    address: "Rua Joaquim Torres, 850"
},

{
    name: "João Carvalho",
    age: 34,
    address: "Rua Joaquim Torres, 234"
},
{
    name: "Letícia Fortes",
    age: 23,
    address: "Rua Joaquim Torres, 873"
}]

console.log(people);
console.log(people[2]);


