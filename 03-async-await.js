/*const readfile = require("readline");
const terminal = readfile.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// no async await
function questionAsync(texto) {
  return new Promise((resolve, reject) => {
    terminal.question(`${texto}\n`, (msg) => {
      if (!msg) return reject(new Error("O campo não pode ser vazio!"));
      return resolve(msg);
    });
  });
}

async function main() {
  try {
    const nome = await questionAsync("Qual é seu nome?");
    const telefone = await questionAsync("Qual é seu telefone?");
    console.log(`Nome: ${nome}, Telefone: ${telefone}`);
  } catch (error) {
    console.log("Deu ruim", error.stack);
  } finally {
    terminal.close();
  }
}

main();
*/


// PROMISE
fetch('coffee.jpg')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.blob();
    })
    .then(myBlob => {
      let objectURL = URL.createObjectURL(myBlob);
      let image = document.createElement('img');
      image.src = objectURL;
      document.body.appendChild(image);
    })
    .catch(e => {
      console.log('There has been a problem with your fetch operation: ' + e.message);
    });

    // TRANSFORMANDO EM ASYNC/AWAIT

    async function myFetch() {
      let response = await fetch('coffee.jpg');

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      let myBlob = await response.blob();

      let objectURL = URL.createObjectURL(myBlob);
      let image = document.createElement('img');
      image.src = objectURL;
      document.body.appendChild(image);
    }

    myFetch()
    .catch(error => {
      console.log('There has been a problem with your fetch operation: ' + error.message);
    })

    //REFATORANDO CÓDIGO ACIMA

    async function myFetch() {
      let response = await fetch('coffee.jpg');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.blob();

    }
  
  myFetch().then((blob) => {
    let objectURL = URL.createObjectURL(myBlob);
    let image = document.createElement('img');
    image.src = objectURL;
    document.body.appendChild(image);
    })
    //TRATAMENTO DE ERRO:
    //OUTRA OPÇÃO É USANDO O TRY, CATCH
    .catch((error) => 
      console.log(error)
      );
  


      async function fetchAndDecode(url, type) {
        let response = await fetch(url);
      
        let content;
      
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        } else {
          if(type === 'blob') {
            content = await response.blob();
          } else if(type === 'text') {
            content = await response.text();
          }
        }
      
        return content;
      
      
      }