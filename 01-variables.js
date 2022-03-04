// VARIÁVEIS: São case sensitives

// usar as variáveis com o intuito de deixar elas mudarem de valor ao longo do caminho.

var numero1 = 1    //NÃO USAR O VAR  
let numero2 = 2    //Variável
const numero3 = 3 //Constante

numero1 = 10  // estamos trocando o valor da variável para 10
numero2 = 20  // estamos trocando o valor da variável para 20
//numero3 = 30  --> não vai funcionar porque é uma constante. O valor nunca muda.

console.log("Aqui usei aspas por se tratar de um texto")
console.log(numero1)  //Perceba que pra variáveis não utilizamos aspas.
console.log(numero2)
console.log(numero3)


//Permitido:
//-iniciar com $ ou _
//-colocar acentos
//-iniciar com letras maiúsculas e minúsculas

//Não pode:
//iniciar com números
//colocar espaços

//Ideal:
//- Camel case: quantidadeDeMaçasDoPote ( primeira letra inicial minúscula e as maiúscula em início de cada palavra, já que não podemos usar o espaço.)
//- Snake case: quantidade_de_maças_do_pote
//- SEMPRE em inglês
// - nome que fazem sentido




