// Faça um programa onde ele leia 4 números. Em cada caso, ele deve retornar a mensagem condizente: - Todos os números são impares => TODOS OS NÚMEROS SÃO IMPARES - Todos os números são pares => TODOS OS NÚMEROS SÃO PARES. Em caso negativo dos casos a cima, colocar uma mensagem => Há números pares e ímpares.

let num1 = 10
let num2 = 12
let num3 = 14
let num4 = 16

if(num1 % 2 === 0 && num2 % 2 === 0 && num3 % 2 === 0 && num4 % 2 === 0) {
    console.log('TODOS OS NÚMEROS SÃO PARES')
}
else if(num1 % 2 !== 0 && num2 % 2 !== 0 && num3 % 2 !== 0 && num4 % 2 !==0){
    console.log('TODOS OS NÚMEROS SÃO ÍMPARES')    
} 
else {
    console.log('há números pares e ímpares')  
}

