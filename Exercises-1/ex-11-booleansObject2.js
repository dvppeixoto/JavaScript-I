// [ ] Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em um objeto. Ex: const object1 = {firstName:"João", seccondName:"Maria"}. João e João, imprime true. João e Maria, imprime false.

const object1 = {
    firstName: "Diego",
    lastName: "Peixoto"
}

let result = object1.firstName == object1.firstName
console.log(result);

let result2 = object1.firstName == object1.lastName
console.log(result2);


