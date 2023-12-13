let readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingresa un numero: ', (userInput) => {

    let multiplicador = 1;

    for(let i = 1; i <= userInput; i++){

        process.stdout.write(i+' ');
        multiplicador = multiplicador * i;
        
    }
    console.log(", El factorial de "+ userInput+ " Es: "+ multiplicador);
    
    rl.close(); 
  });