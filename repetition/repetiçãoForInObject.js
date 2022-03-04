// usamos para objetos

const students = {
    name: 'diego',
    age: 32,
    genre: 'male'
}

for(let property in students) {  // a variável property internaliza as propriedades do objeto.
    //console.log(property)
    console.log(students[property])

    //console.log(students.name)         /* são a mesma coisa. esta linha e a próxima linha */
    //console.log(students['name'])       
}

const alunos = {
    name: 'carlos',
    age: 12,
    genre: 'male'
}

for(let property2 in alunos){
    console.log(`${property2}:${alunos[property2]}`)

}
