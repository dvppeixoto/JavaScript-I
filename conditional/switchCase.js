// switch case - caso de troca
// o switch case é usado para evitar o excesso de else if
// note que só fechamos a chave no final do switch. já no if else fechamos em cada condição.

const temperature = 36

switch(temperature) {
    case 30:
        console.log('Temperatura de hipotermia')
    break     //
    
    case 35:
        console.log('Temperatua abaixo do normal')
    break
    
    case 37:
        console.log('Pouco febril')
    break 
    
    default:      //valor padrão caso não encontre as opções anteriores.
        console.log('Temperatura não encontrada')
    break    
}