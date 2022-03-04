// Faça um programa que receba 3 números inteiros, e deve imprimir, qual é o maior, qual é o menor.

let number1 = 10
let number2 = 20
let number3 = 30

if(number1 > number2 && number1 > number3){
    console.log(`O ${number1} é o maior número`)
}

else if(number2 > number1 && number2 > number3){
    console.log(`O ${number2} é o maior número`)
}
else {
    console.log(`O ${number3} é o maior número`)
}

if(number1 < number2 && number1 < number3){
    console.log(`O ${number1} é o menor número`)
}

else if(number2 < number1 && number2 < number3){
    console.log(`O ${number2} é o menor número`)
}
else {
    console.log(`O ${number3} é o menor número`)
}

//resolução do prof. Rodoldo

const firstNumber = 44
const seccondNumber = 12
const thirdNumber = 30

if(firstNumber > seccondNumber && firstNumber > thirdNumber) { //se for verdade, encerra aqui.
    console.log('o primeiro é o maior')
}
else if(seccondNumber > thirdNumber) {    // concluimos que o primeiro não seja o maior
    console.log('o segundo é o maior')
}
else{
    console.log('o terceiro é o maior') // se nem o primeiro, nem o segundo é maior, só resta o terceiro.
}

if(firstNumber < seccondNumber && firstNumber < thirdNumber) {
    console.log('o primeiro é o menor')
}
else if(seccondNumber < thirdNumber) {    // concluimos que o primeiro não seja o menor
    console.log('o segundo é o menor')
}
else{
    console.log('o terceiro é o menor') // se nem o primeiro, nem o segundo é menor, só resta o terceiro.
}



