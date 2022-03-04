/* const objeto = {
    propriedade: valor  
}
*/

const person = {                   //formato de um objeto
    name: "Diego Peixoto",         /*A vírgula sempre pára na última propriedade */
    age: 42,                       
    height: 1.70,
    peso: 83,
    address: {                      //objeto address dentro do objeto person
        Street: "Joaquim Torres",
        Number: 850,
        CEP: 60135130
    }     
}

console.log(person)
console.log(person.age)
console.log(person.address.CEP)
