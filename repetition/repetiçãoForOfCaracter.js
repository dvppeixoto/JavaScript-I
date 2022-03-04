// a vantagem do for of é que não precisamos ficar avisando quando ele tem que parar
// mais inteligente que o for e o while.

//for in = para em
//for of = para de 

let myName = 'diego'
for(let letter of myName){
    console.log(letter)  // será impresso a string diego caracter por caracter.

}

let myArray = ['diego', 'amanda', 'carlos', 'sérgio']
for(let names of myArray){
    console.log(names)   // será impresso nome por nome até terminar.
}

let myNumber = '2345'     //string
for(let numbers of myNumber){
    console.log(numbers)       // será impressos os números por número.
}

console.log(typeof myNumber)

