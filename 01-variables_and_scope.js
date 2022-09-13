// -> VARIABLES
//var -  Ao utilizar var, a variável é declara e inicializada no escopo da função, não respeitando bloco e permitindo reatribuição mas não a redeclaração.
//let – Ao utilizar let, a variável é declarada no escopo da função mas só é inicializada posteriormente, respeitando bloco e permitindo reatribuição mas não a redeclaração.
//const – Ao utilizar const, a variável é declara no escopo da função mas só é inicializada posteriormente, respeitando bloco e não permitindo reatribuição nem redeclaração.

//OBS:NUNCA declare uma variável sem var,let ou const.
//Para declarar um identificador válido use: [a-zA-Z0-9_$]

//1- LET || É possivel reatribuir valor.
let firstName
firstName = 'Lucas'
console.log(firstName) // Lucas
firstName = 'Lucas Cardoso'
console.log(firstName) // Lucas Cardoso

//2- CONST
const myBirthday = '18.04.1982'
console.log(myBirthday) // 18.04.1982

//3- var (uso não recomendado)
//É uma constante porém pode alterar os dados :/

// ->SCOPE
//JavaScript é uma linguagem muito orientada para funções. Isso nos dá muita liberdade. Uma função pode ser criada a qualquer momento, passada como um argumento para outra função, 
//então chamada de um lugar totalmente diferente de código mais tarde.

//EX1
/*{
  // do some job with local variables that should not be seen outside

  let message = 'Hello' // only visible in this block

  alert(message) // Hello
}

alert(message) // Error: message is not defined
*/

//EX2
{
  // show message
  let message = 'Hello'
  console.log(message)
}

{
  // show another message
  let fdasfs = 'Goodbye'
  console.log(fdasfs)
}
