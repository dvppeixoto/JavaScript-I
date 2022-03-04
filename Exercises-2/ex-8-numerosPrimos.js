// Faça um programa onde leia um número e diga se ele é: - ímpar, - par, - é um número primo e impar, - é par e divisível por 5.

let n = 324
let m = 13
let p = 276
let divisor = 0

//questao 8.1
if(n % 2 === 0 ){
    console.log('é par')
}

if(n % 2 !== 0) {
    console.log('é ímpar')
}

//questao 8.2
for(let i=1; i <= m; i++){

    if(m % i === 0 && m % 2 !==0)
      divisor++;
}
    if(divisor == 2){
        console.log('é primo e ímpar')
    }
    else{
        console.log('não é primo ou é par')
    }

//questao 8.3
if(p % 2 === 0 && p % 5 === 0) {
    console.log('é par e divisível por 5')
}
else{
    console.log('não é par ou não é divisível por 5')
}


//resolução do prof. Rodolfo:

const number = 7

if(number % 2 === 0){
    if(number % 5 === 0) console.log('o número é par e divisível por 5')
}
else{
    for(let i=2; i < number; i++) //aqui o teste vai rolar entre o 2 e 6.
        if(number % i === 0) { //
            console.log('é ímpar, mas não é primo')
            break // pára a execução do for
        }
        else{
            if(i === number - 1) console.log('é primo') //*aqui o seria i=6, por isso o number que é 7 - 1 = 6.
                                                         // ou seja, 6 = 6.
        }
}

