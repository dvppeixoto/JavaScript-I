//Faça um programa que gere um número aleatório entre 1 e 10, esse número é o número 'ganhador'. Então ele também irá gerar um número aleatório entre 1 e 10, e verifica se a pessoa ganhou ou não. Em caso de ter ganhado, mostra o prêmio, se não ganhou, mostra outra mensagem.

let aleatory = Math.floor(Math.random() * 10 + 1)
if(aleatory === 5){
    console.log('Você foi sorteado! Parabéns!!')
}    
else{
    console.log('Não foi dessa vez, tente novamente!!')
}    

//fórmula do Math.random() --> Math.random() * (max - min) + min;
// resolução do prof. Rodoldo:

let randomNumber = Math.floor(Math.random() * (10 - 1) + 1)
let winningNumber = Math.floor(Math.random() * (10 - 1) + 1)

console.log(randomNumber, 'randomNumber')
console.log(winningNumber, 'winningNumber')

if(randomNumber === winningNumber){
    console.log('Você ganhou')
}

else{
    console.log('Tente novamente')
}
 


