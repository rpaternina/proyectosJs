const { userInfo } = require('os');
let readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const dolar = 3881;

function convertir(){
    rl.question('Ingresa cuento dinero quiere convertir: ', (userInput) => {
        if(userInput.length > 1){
            let multi = userInput * dolar
            console.log('La cantidad es: ', multi);
            seguir();
        }else{
            console.log('Debe ingresar una cantidad mayor a 1');
            convertir();
        }
      });
}

function seguir(){
    rl.question('Desea seguir jugando? si/no: ', (userInput ) =>{
        userInput = userInput.toLocaleLowerCase();
        if(userInput == 'si'){
            convertir();
        }else{
            console.log('Hasta la proxima')
            rl.close();
        }
    })
}


convertir();
