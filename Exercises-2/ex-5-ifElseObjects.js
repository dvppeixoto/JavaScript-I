/* Crie 5 objetos nesse formato
{ nome: "" idade:"" sexo:"" profissão: "" nacionalidade:"" }
Ao rodar o programa, deve imprimir se a pessoa é aprovada ou não no processo ,a pessoa deve ser maior de idade e brasileira para ser aprovada. */

const object = [{
    nome: 'diego',
    idade: 42,
    sexo: 'masculino',
    profissao: 'analista de TI',
    nacionalidade: 'brasileira' 
},
{   nome: 'leonardo',
    idade: 17,
    sexo: 'masculino',
    profissao: 'advogado',
    nacionalidade: 'paraguaia' 
},
{   nome: 'amanda',
    idade: 30,
    sexo: 'feminino',
    profissao: 'médica',
    nacionalidade: 'americana' 
},
{   nome: 'paula',
    idade: 18,
    sexo: 'feminino',
    profissao: 'operária',
    nacionalidade: 'sueca' 
},
{   nome: 'paulo',
    idade: 12,
    sexo: 'masculino',
    profissao: 'estudante',
    nacionalidade: 'chilena' 
},
]
// fiz de duas maneiras: a primeira usando if e a segunda usando for.

if(object[0].idade >= 18 && object[0].nacionalidade === 'brasileira'){
    console.log(`O aluno ${object[0].nome} está aprovado`)
}
else{
    console.log(`O aluno ${object[0].nome} está reprovado`)
}

if(object[1].idade >= 18 && object[1].nacionalidade === 'brasileira'){
    console.log(`O aluno ${object[1].nome} está aprovado`)
}
else{
    console.log(`O aluno ${object[1].nome} está reprovado`)
}

if(object[2].idade >= 18 && object[2].nacionalidade === 'brasileira'){
    console.log(`O aluno ${object[2].nome} está aprovado`)
}
else{
    console.log(`O aluno ${object[2].nome} está reprovado`)
}

if(object[3].idade >= 18 && object[3].nacionalidade === 'brasileira'){
    console.log(`O aluno ${object[3].nome} está aprovado`)
}
else{
    console.log(`O aluno ${object[3].nome} está reprovado`)
}

if(object[4].idade >= 18 && object[4].nacionalidade === 'brasileira'){
    console.log(`O aluno ${object[4].nome} está aprovado`)
}
else{
    console.log(`O aluno ${object[4].nome} está reprovado`)
}

/*console.log(object[0])*/  // só para testar

//segunda forma bem mais rápida:

for(let i=0; object[i].idade >= 18 && object[i].nacionalidade === 'brasileira'; i++) {
    console.log(`O aluno ${object[i].nome} está aprovado.`)
}

//resolução do prof. Rodolfo: ele esqueceu de criar os 5 objetos.

const personOne = {nome: 'Rodolfo', idade: 10, sexo: 'Masculino', profissão:'Programador', nacionalidade:'brasileira'}

if(personOne.idade >= 18 && personOne.nacionalidade === 'brasileira' || personOne.nacionalidade === 'brasileiro'){
    console.log('Aprovado')
}
else{
    console.log('reprovado')
}





    




    