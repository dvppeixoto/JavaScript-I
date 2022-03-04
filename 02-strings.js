/* Strings

- Cadeia de caracteres

*/
// 3 maneiras de escrever uma String

let myFirstString = "01 - texto envolvido entre aspas duplas"
let mySecondString = '02 - texto envolvido entre aspas simples'  //utilizar esta como default
let myThirdString = `03 - texto envolvido entre crase` //template literals ou template strings. Super poderes.

/* a diferença entre aspas duplas e simples se resume literalmente em caso de querer usar aspas duplas para
uma semântica em Português no texto, pois não é possível usar aspas duplas dentro de aspas duplas. */

// Abaixo são exemplos do uso da crase:

let myTextWithSuperPowers = `posso pulas várias linhas sem 
probĺemas nenhum,
ta vendo? `

let numberOfPeoples = 34
let myText = ` Na minha sala tinham ${numberOfPeoples} alunos. Também podemos incluir um cálculo que 
o valor será de ${3 * 40 - 23}.`
console.log(myText)

