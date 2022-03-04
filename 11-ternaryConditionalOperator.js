/*  ?  --> se
    :  --> se não

    */

const rain = true;
const umbrella = rain ? "levar guarda-chuva" : "deixar guarda-chuva"; /* Se rain for verdade, levar guarda-chuva, se não deixar guarda-chuva. */
console.log(umbrella);

const rain2 = false;
const umbrella2 = rain2 ? "levar guarda-chuva" : "deixar guarda-chuva" /*rain falso, deixa guarda-chuva. A
posição da sintaxe ( levar guarda-chuva ) indica verdadeiro e a posição após : é falso. */
console.log(umbrella2);

//PRECISO TRANSFERIR MEU DINHEIRO

const saldo = true;   //as palavras reservadas e as variáveis não são postas entre aspas.
const notBlocked = true;
const accountExiste = true;

const transferOk = saldo && notBlocked && accountExiste ? 'TRANSFERÊNCIA REALIZADA ' : 'TRANSFERÊNCIA NEGADA';
console.log(transferOk);







