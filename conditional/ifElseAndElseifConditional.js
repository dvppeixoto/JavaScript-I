/* if = se
   else if = mais se ...
   else = se não...
   */
if(true){
    console.log('imprima aqui dentro')

}

if(false){
    console.log('não vai acontecer nada') // inclusive perdeu a cor porque o if trabalha com uma condição verdadeira.
}

// Outro exemplo:

const age = 18;
if(age >= 18){
    console.log('Acesso Permitido')
}
else{                   // o else não é obrigatŕio. podemos ter somente o if. somente o else não pode.
    console.log('Acesso não permitido')
}

// agora com o exemplo else if ( dá uma opção a mais )

const temperature = 36

if(temperature >= 36 && temperature<= 38){
    console.log('Você está saudável')
}
else if(temperature < 36){         //podemos ter vários e vários else if. 
    console.log('Você está com hipotermia')
}
else{
    console.log('Você está com febre')
}