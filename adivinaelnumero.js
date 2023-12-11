let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

   
let numeroAleatorio = 25//Math.floor(Math.random() * 30) + 1;      
  rl.question('Ingresa un numero entre 1 y 30: ', (userInput) => {
    while( userInput != numeroAleatorio){
      if(userInput == numeroAleatorio){
        console.log("Ganaste, el numero era: "+ userInput);
        
      }else if(userInput < numeroAleatorio){
       console.log("Ingresaste un numero menor, intenta con uno más grande");
       rl.question('Ingresa un numero entre 1 y 30: ', (userInput) => {
       
        });
      
      }else if(userInput > numeroAleatorio){
        console.log("Ingresaste un numero mayor, intenta con uno más pequeño");
        rl.question('Ingresa un numero entre 1 y 30: ', (userInput) => {
        
        });
      }

  //rl.close();
    };
  });
