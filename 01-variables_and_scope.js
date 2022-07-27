// -> VARIABLES
//Podemos declarar variáveis para armazenar dados usando as palavras-chave abaixo:
//let – é uma declaração variável moderna.
//const – é como, mas o valor da variável não pode ser alterado.
//var – Não usar.

//1- LET || É possivel alterar dados da variável.
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
//JavaScript é uma linguagem muito orientada para funções. Isso nos dá muita liberdade. Uma função pode ser criada a qualquer momento, passada como um argumento para outra função, e então chamada de um lugar totalmente diferente de código mais tarde.

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
