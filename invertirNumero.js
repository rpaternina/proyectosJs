let readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingresa un numero de dos o más cifras: ', (userInput) => {

    if(userInput.length > 1){

        let invertir = userInput.toString().split("").reverse().join("");
        console.log(invertir);
    
    }else{

        console.log("Por favor ingrese un numero de dos o más cifras");
    }
    
    
    rl.close(); 
  });