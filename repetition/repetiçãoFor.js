// Estrutura de repetição - for
// for (let index = valor inicial; condição; incremento)


for(let i = 0; i < 10; i++) {    // A variável é declarada dentro do for
    console.log(i);  // o que estiver dentro do for será executado quantas vezes forem pedidas na condição.
}

console.log('terminou meu for')

const students = ['Bruna', 'Sávio', 'Amanda', 'Pedro', 'Saulo', 'Maria', 'Helano']
    console.log(students.length);

for(let i = 0; i < students.length; i++) {
    console.log(`${students[i]} está presente na aula`)
    console.log(`${students} estão presentes na aula hoje`)
}

for(let i = 2; i < 5; i++){
    console.log(`${students[i]} faltou a aula`)
}




